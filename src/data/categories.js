

const categories = [
  {
    categoryId: "best-sellers",
    title: "Best sellers",
  },
  {
    categoryId: "all-products",
    title: "All products",
  },
  {
    categoryId: "holiday-gifting",
    title: "Holiday gifting",
  },
  {
    categoryId: "birthday",
    title: "Burthday",
  },
  {
    categoryId: "bake-at-home",
    title: "Bake at home",
  },
];

export function getCategories() {
  return categories;
};

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
};