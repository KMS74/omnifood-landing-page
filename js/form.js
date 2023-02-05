const validator = new JustValidate(".cta-form", {
  tooltip: {
    position: "left",
  },
});

validator
  .addField("#name", [
    {
      rule: "required",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .addField("#select-where", [
    {
      rule: "required",
    },
  ]);
