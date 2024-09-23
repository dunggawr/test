export interface News_blog {
  all: ListNews[],
  tips: ListNews[],
  ieltsNews: ListNews[],
  minimalNews: ListNews[],
  faq: ListNews[],
  detail: Detail,
}

export interface HomeData {
  banner: banner;
  about_us: About;
  outstanding_class: Outstanding_class;
  testimonial: Testimonial;
  why_us: Why_us;
  videoId: string;
}
    export interface Why_us{
      label: string;
      title: string;
      image: string;
      info_why_us: Info_why_us[];
    }
    export interface Testimonial{
      label: string;
      title: string;
      info_testimonials: Info_testimonials[];
    };
    export interface Outstanding_class{
      label: string;
      title: string;
      info_classes: InfoClass[];
    };
    export interface banner {
      title: string;
      slogan: string;
      image: {
        image_1: string,
        image_2: string,
        image_3: string,
        image_4: string,
        image_5: string,
        image_6: string,
        image_7: string,
      };
      content: string;
    };
    export interface About{
      label: string;
      title: [string, string];
      image: {
        image_1: string;
        image_2: string;
      };
      content: string;
    };

  export interface Library {
    writing: Lesson[],
    speaking: Lesson[],
    reading: Lesson[],
    listening: Lesson[],
    vocabulary: Lesson[],
    pronunciation: Lesson[],
    paraphrases: Lesson[],
    selfstudy: Lesson[],
    document: document[],
    examstest: document[],
    examsyear: document[],
    skilldocument: document[],
    usermanual: document[]
  }
  export interface HomeData {
    banner: banner;
    about_us: About;
    outstanding_class: Outstanding_class;
    testimonial: Testimonial;
    why_us: Why_us;
    videoId: string;
  }
      export interface Why_us{
        label: string;
        title: string;
        image: string;
        info_why_us: Info_why_us[];
      }
      export interface Testimonial{
        label: string;
        title: string;
        info_testimonials: Info_testimonials[];
      };
      export interface Outstanding_class{
        label: string;
        title: string;
        info_classes: InfoClass[];
      };
      export interface banner {
        title: string;
        slogan: string;
        image: {
          image_1: string,
          image_2: string,
          image_3: string,
          image_4: string,
          image_5: string,
          image_6: string,
          image_7: string,
        };
        content: string;
      };
      export interface About{
        label: string;
        title: [string, string];
        image: {
          image_1: string;
          image_2: string;
        };
        content: string;
      };

    export interface InfoClass {
      name: string;
      description: string;
      image: string;
      isComing: boolean;
      href: string
    }

    export interface Info_testimonials{
      name: string;
      address : string;
      content : string;
      image: string;
    }

    export interface Info_why_us{
      title: string;
      content: string;
    }

export interface About_us{
  mission: Mission;
  vision: vision;
  brand_story: Brand_story;
  highlights: Highlights;
  lectures: lectures;
}
export interface lectures{
  label: string;
  description: string;
  detail_lectures:Detail_lectures[];
}
export interface Highlights{
  label: string;
  description: string;
  lecturers: {
    title: string;
    content: Content[]
  }
  teaching_methods: {
    title: string;
    content: Content[]
  }
}
  export interface Brand_story{
    label: string;
    description: string;
    detail_stories: Detail_story[]
  };
  export interface vision{
    label: string;
    image: string;
    content: string
  };
  export interface Mission{
    label: string;
    image: string;
    content: string;
  };
  export interface Detail_story{
    year: string;
    content: string;
  };
  export interface Detail_lectures{
    year: string;
    username: string;
    content: string[];
    image: string;
  }

    type Content = string;

    export interface ListNews {
      tag: string | undefined,
      image: string,
      read_time: number,
      title: string,
      description: string,
      href: string,
      created_at: string
    }
    export interface Lesson {
      title: string,
      image: string,
      view: string,
      time: string,
      link: string
    }
    export interface document {
      title: string,      
      downloads: string,      
      time: string,
      
    }

    export interface Detail{
      title: string,
      description: string,
      image: string,
      content: string,
      content1: string,
      content2: string,
      content3: string,
      content4: string,
      content5: {
        ul: string,
        li: string[]
      },
      content6: string,
    }

export interface Class_Detail {
  id: number,
  image: string,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: number,
  status: number,
  name: string,
  description: string,
  content: string,
}

export interface IBaseResponse<T>{
  status_code: number;
  data: T;
  message: string;
}

export interface ClassData {
  data_detail: Class_Detail | undefined
  children: string;
}

export interface Section {
  id: number,
  image: string,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: number,
  status: number,
  name: string,
  description: string
}

export interface Component {
  id: number,
  image: string,
  image_2: string,
  image_3: string,
  image_4: string,
  image_5: string,
  image_6: string,
  image_7: string,
  section_id: number,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: string,
  status: number,
  title: string,
  content:string,
}

export interface All_Page {
  id: string,
  url: string,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: number,
  status: number,
  name: string,
}

interface getDocument {
  id: number;
  created_at: string;
  updated_at: string;
  created_by: string;
  update_by: string;
  order: number;
  status: number;
  name: string;
  description: string | null;   
}

export interface HLClass {
  id: number,
  image: string,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: number,
  status: number,
  name: string,
  description: string,
  content: string
}

export interface HL{
  data: HLClass[],
}

export interface Feedback {
  id: number,
  name: string,
  address: string,
  avatar: string,
  image: string,
  image_2: string,
  image_3: string,
  image_4: string,
  image_5: string,
  image_6: string,
  order: number,
  status: number,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  content: string
}

export interface FB{
  data: Feedback[]
}

export interface Related{
  id: number,
  news_category_id: number,
  slug: string,
  read_time: number,
  image: string,
  order: number,
  status: number,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  title: string,
  content: string,
  description: string
}

export interface Slug{
  id: number,
  news_category_id: number,
  slug: string,
  read_time: number,
  image: string,
  order: number,
  status: number,
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  title: string,
  content: string,
  description: string
}

export interface SL {
  data: Slug[]
}

export interface AllCategory {
  id: number
  created_at: string,
  updated_at: string,
  created_by: string,
  updated_by: string,
  order: number
  status: number
  name: string
  description: string
}

export interface ShortClass {
  id: number, 
  order: number,
  name: string
}

export interface FooterData {
  id: number;
  group: string;
  type: string;
  value: string;
  image: string | null;
  description_vi: string;
  description_en: string;
  order: number;
  block_delete: number;
  status: number;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
}

export interface FooterSectionProps {
  footerData: FooterData[];
}