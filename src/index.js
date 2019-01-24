const req = () => {
  import(/* webpackChunkName: "alex" */ './another').then((module) => {
    module();
  });
};

req();
