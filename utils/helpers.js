export const ageCalc = (date) => {
  const now = new Date(); // fecha actual
  const birth = new Date(date); // fecha de nacimiento
  const diff = Math.abs(now - birth);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const INFO = {
  domain: "ahmedrangel.com",
  phone: "+507 68279308",
  birthday: "1998-06-15",
  email: "ahmedrangel@outlook.com",
  socials: {
    github: {
      icon: "simple-icons:github",
      url: "https://github.com/ahmedrangel"
    },
    linkedin: {
      icon: "simple-icons:linkedin",
      url: "https://www.linkedin.com/in/ahmedrangel/"
    },
    instagram: {
      icon: "simple-icons:instagram",
      url: "https://www.instagram.com/ahmedrangel/"
    }
  }
};