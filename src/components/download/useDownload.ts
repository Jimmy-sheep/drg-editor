import useChangesStore from '@/stores/changesStore';
import useSaveStore from '@/stores/saveStore';
import downloadBlob from './_helpers/downloadBlob';

interface ReturnType {
  state: {
    changes: number;
  };
  actions: {
    onDownloadClick: () => void;
  };
}

function useDownload(): ReturnType {
  const { changes, reset } = useChangesStore();
  const { save, name } = useSaveStore();

  const onDownloadClick = (): void => {
    downloadBlob(save, name, 'application/octet-stream');
    reset();
  };

  return { state: { changes }, actions: { onDownloadClick } };
}

export default useDownload;
