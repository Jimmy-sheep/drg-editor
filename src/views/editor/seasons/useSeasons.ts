/* eslint-disable @typescript-eslint/no-magic-numbers */
import { SEASONS } from '@/constant';
import useSaveStore from '@/stores/saveStore';
import { useState } from 'react';

interface ReturnType {
  state: {
    activeTab: keyof typeof SEASONS;
    tabs: (keyof typeof SEASONS)[];
  };
  actions: {
    onChange: (value: keyof typeof SEASONS) => void;
  };
}

function useSeasons(): ReturnType {
  const { save } = useSaveStore();
  const tabs = Object.keys(SEASONS).filter(
    key => save.indexOfMulti(SEASONS[key as keyof typeof SEASONS]) !== -1
  ) as (keyof typeof SEASONS)[];

  const [activeTab, setActiveTab] = useState<keyof typeof SEASONS>(
    tabs.at(-1) as keyof typeof SEASONS
  );

  const onChange = (value: keyof typeof SEASONS): void => {
    setActiveTab(value);
  };

  return {
    state: { activeTab, tabs },
    actions: { onChange }
  };
}

export default useSeasons;
