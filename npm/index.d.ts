declare module '@apiverve/worldholidays' {
  export interface worldholidaysOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface worldholidaysResponse {
    status: string;
    error: string | null;
    data: WorldHolidaysData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WorldHolidaysData {
      country:  null | string;
      year:     number | null;
      holidays: Holiday[];
  }
  
  interface Holiday {
      date:        Date | null;
      start:       Date | null;
      end:         Date | null;
      name:        null | string;
      type:        Type | null;
      dayOfWeek:   null | string;
      englishName: null | string;
      substitute?: boolean | null;
  }
  
  enum Type {
      Observance = "observance",
      Optional = "optional",
      Public = "public",
  }

  export default class worldholidaysWrapper {
    constructor(options: worldholidaysOptions);

    execute(callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query?: Record<string, any>): Promise<worldholidaysResponse>;
  }
}
