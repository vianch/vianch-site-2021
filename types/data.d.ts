interface DataInfo {
  url: string;
  title: string;
  description: string;
}

interface Repository extends DataInfo {
  technology: string;
}

interface WorkInfo extends DataInfo {
  imageUrl: string;
}
