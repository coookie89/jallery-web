export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  isHost: boolean;
  phone?: string;
  bio?: string;
}
