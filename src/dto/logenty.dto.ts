export interface LogEntry {
  action: string;
  endpoint: string;
  user: any;
  processingTime: number;
  ip?: string;
  userAgent?: string;
  latitude?: string;
  longitude?: string;
  os: string;
  browser: string;
  isp: string;
  pays: string;
}
