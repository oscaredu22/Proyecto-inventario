export interface Reservation {
  id?: number,
  name?: string,
  created_at?: string,
  user_id?: number,
  services_id?: number,
  hairdressers?: string,
  reservation_date?: string,
  reservation_hour?: string,
  sub_service_id?: number,
}
