let person = {
  name: "vijay",
  age: "23",
  place: "chennai",
  call1: () => {
    console.log(this);
    return () => {
      console.log(this);
      return function () {
        console.log(this);
      };
    };
  },
};
person.call1()()();
