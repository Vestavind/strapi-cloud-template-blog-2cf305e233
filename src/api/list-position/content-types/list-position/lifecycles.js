module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.fylke && data.posisjon) {
      data.name = `${data.fylke} / ${data.posisjon}`;
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;
    if (data.fylke && data.posisjon) {
      data.name = `${data.fylke} / ${data.posisjon}`;
    }
  },
};
