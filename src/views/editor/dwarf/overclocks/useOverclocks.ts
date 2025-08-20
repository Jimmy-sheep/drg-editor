/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { UUID } from '@/helpers/u8array/uint8array';
import useChangesStore from '@/stores/changesStore';
import type { FilterType } from '@/stores/filterStore';
import { useFilterStore } from '@/stores/filterStore';
import useSaveStore from '@/stores/saveStore';
import { useState } from 'react';
import createForged from './_helpers/createForged';
import createOwned from './_helpers/createOwned';
import handleForge from './_helpers/handleForge';
import handleOwn from './_helpers/handleOwn';

const FORGED_NEEDLE: UUID = [
  0x46, 0x6f, 0x72, 0x67, 0x65, 0x64, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x74,
  0x69, 0x63, 0x73, 0x00, 0x0e, 0x00, 0x00, 0x00, 0x41, 0x72, 0x72, 0x61, 0x79,
  0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x00
];

const OWNED_NEEDLE: UUID = [
  0x4f, 0x77, 0x6e, 0x65, 0x64, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x74, 0x69,
  0x63, 0x73, 0x00, 0x0e, 0x00, 0x00, 0x00, 0x41, 0x72, 0x72, 0x61, 0x79, 0x50,
  0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x00
];

const COUNT_OFFSET = 28;
const OWNED_OFFSET = 105;
const FORGED_OFFSET = 106;

interface ReturnType {
  state: {
    owned: string[];
    forged: string[];
    filters: Partial<Record<FilterType, string[]>>;
  };
  actions: {
    onLock: (id: string) => void;
    onUnlock: (id: string) => void;
    onForge: (id: string) => void;
  };
}

function useOverclocks(): ReturnType {
  const { filters } = useFilterStore();
  const { save, setSave } = useSaveStore();
  const { increment } = useChangesStore();

  const [owned, setOwned] = useState(() => {
    if (!save.has('OwnedSchematics')) {
      createOwned(save, setSave);
    }

    const length = save.getInt32(OWNED_NEEDLE, COUNT_OFFSET);
    const overclocks = [];
    for (let index = 0; index < length; index++) {
      overclocks.push(save.getUUID(OWNED_NEEDLE, OWNED_OFFSET + index * 16));
    }
    return overclocks;
  });

  const [forged, setForged] = useState(() => {
    if (!save.has('ForgedSchematics')) {
      createForged(save, setSave);
    }

    const length = save.getInt32(FORGED_NEEDLE, COUNT_OFFSET);
    const forgedSchematics = [];
    for (let index = 0; index < length; index++) {
      forgedSchematics.push(
        save.getUUID(FORGED_NEEDLE, FORGED_OFFSET + index * 16)
      );
    }
    return forgedSchematics;
  });

  const onLock = (id: string): void => {
    if (!owned.includes(id) && !forged.includes(id)) return;
    if (owned.includes(id)) handleOwn({ save, id, owned, setSave, setOwned });
    if (forged.includes(id))
      handleForge({ save, id, forged, setSave, setForged });

    increment();
  };

  const onUnlock = (id: string): void => {
    if (owned.includes(id) && !forged.includes(id)) return;
    if (!owned.includes(id)) handleOwn({ save, id, owned, setSave, setOwned });
    if (forged.includes(id))
      handleForge({ save, id, forged, setSave, setForged });

    increment();
  };

  const onForge = (id: string): void => {
    if (!owned.includes(id) && forged.includes(id)) return;
    if (owned.includes(id)) handleOwn({ save, id, owned, setSave, setOwned });
    if (!forged.includes(id))
      handleForge({ save, id, forged, setSave, setForged });

    increment();
  };

  return {
    state: { owned, forged, filters },
    actions: {
      onLock,
      onUnlock,
      onForge
    }
  };
}

export default useOverclocks;
