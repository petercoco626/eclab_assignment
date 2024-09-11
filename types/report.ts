export type UserType = 'student' | 'counselor';

export interface ReportItemInfo {
  title: string;
  icon: string;
  count: number;
}

export type ItemCountOnType = Record<ReportItemType, ReportItemInfo>;

export interface Counselor {
  name: string;
  email: string;
}

export interface Student {
  name: string;
  email: string;
  profile: {
    id: string;
    school_id: string;
    gender: string;
    birth_day: string;
    grade: string;
    year_admission: string;
    nationality: string[];
    status_type: string;
    created_at: string;
    updated_at: string;
    school: {
      country_id: string;
      id: string;
      name: string;
      address: string;
      url: string;
      created_at: string;
      updated_at: string;
    };
  };
}

export type ReportItemType =
  | 'Writing Competitions'
  | 'Competitions'
  | 'Pre-college/Summer Programs'
  | 'Volunteering' // note : 여기서부터 3가지 type test-db에 나와있지 않아서 임시로 표기함.
  | 'Research'
  | 'Internship';

export interface ReportItem {
  id: string;
  ec_db: {
    year: string;
    id: string;
    name: string;
    organization: string;
    ec_type: ReportItemType;
    recognition_level: string;
    nationality: string;
    url: string;
    participate_way: string[];
    age_limit: string[];
    grade_limit: string[];
  };
  is_added: boolean;
}

// 학생이랑 상담사의 Response를 나누고 싶지만 오버프로그래밍 같음.
export interface FetchReportResponse {
  data: {
    id: string;
    title: string;
    ec_report_status: string;
    send_dt: string;
    delivered_dt: string;
    student: Student;
    counselor: Counselor;
    ec_report_items: ReportItem[];
  };
}
