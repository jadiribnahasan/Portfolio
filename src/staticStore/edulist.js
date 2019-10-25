const edulist = [
  {
    img: "http://www.uiu.ac.bd/wp-content/uploads/2016/02/UIU-Logo-250.png",
    institute_name: "United International University",
    degree: "Bsc in Computer Science And Engineering",
    year_of_passing: "running",
    gpa: "running"
  },
  {
    img:
      "https://media.licdn.com/dms/image/C4E0BAQHulF44wLuE_A/company-logo_200_200/0?e=2159024400&v=beta&t=-4i5XlONUKdDx6DJEHNiqO6G5b92UFFtmBwWoNxzo2U",
    institute_name: "Dhaka City College",
    degree: "HSC",
    year_of_passing: "2015",
    gpa: "5.00"
  },
  {
    img:
      "data:image/jpeg;base64,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",
    institute_name: "Al-Amin Academy School And College",
    degree: "SSC",
    year_of_passing: "2013",
    gpa: "5.00"
  },
  {
    img:
      "data:image/jpeg;base64,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",
    institute_name: "Sengarchar Model High School",
    degree: "6-7",
    year_of_passing: "2010",
    gpa: null
  }
  //{
  // img: "",
  // institute_name: "Kalakanda Govt Primary School",
  // degree: "primary education",
  // year_of_passing: "2008",
  //gpa: null
  //}
];
export default edulist;