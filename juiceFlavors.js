function juiceFlavors(data) {
  let store = new Map();
  let storeBottle = new Map();

  for (let el of data) {
    let [type, quantity] = el.split(" => ");
    quantity = Number(quantity);

    if (!store.has(type)) {
      store.set(type, 0);
    }
    store.set(type, store.get(type) + quantity);

    if (store.get(type) >= 1000) {
      let bottle = parseInt(store.get(type) / 1000);
      if (!storeBottle.has(type)) {
        storeBottle.set(type, 0);
      }
      store.set(type, store.get(type) - bottle * 1000);
      storeBottle.set(type, storeBottle.get(type) + bottle);
    }
  }

  for (let [key, value] of storeBottle) {
    console.log(`${key} => ${value}`);
  }
}
juiceFlavors([
  "Orange => 2000",

  "Peach => 1432",

  "Banana => 450",

  "Peach => 600",

  "Strawberry => 549",
]);
