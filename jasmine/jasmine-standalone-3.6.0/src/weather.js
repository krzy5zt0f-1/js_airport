class Weather {
  con() {
    return ["stormy", "sunny", "sunny", "sunny"][Math.floor(Math.random() * 4)];
  }
}
