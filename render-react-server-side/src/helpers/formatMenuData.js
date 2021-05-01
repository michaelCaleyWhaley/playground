const splitLargeList = (list) => {
  const fullList = list;
  const splitLists = [];
  while (fullList.length > 14) {
    splitLists.push(fullList.splice(0, 14));
  }
  splitLists.push(fullList);
  return splitLists;
};

const formatSubMenu = (subMenuData) => {
  const column1 = [];
  const column2 = [];
  const column3 = [];
  for (let i = 0; i < subMenuData.length; i += 1) {
    const selectedMenu = subMenuData[i];
    let selectedColumn = column1;
    if (selectedMenu.include_in_menu_column2) {
      selectedColumn = column2;
    } else if (selectedMenu.include_in_menu_column3) {
      selectedColumn = column3;
    }

    const formattedSubMenu = {
      name: selectedMenu.custom_category_name || selectedMenu.name,
      href: `/${selectedMenu.url_path}`,
      isHeader: selectedMenu.is_column_header,
    };

    if (selectedMenu.is_column_header) {
      selectedColumn.unshift(formattedSubMenu);
    } else {
      selectedColumn.push(formattedSubMenu);
    }
  }

  if (column1.length > 18) {
    return splitLargeList(column1);
  }

  return [
    column1.length > 0 && column1,
    column2.length > 0 && column2,
    column3.length > 0 && column3,
  ];
};

const formatMenuData = (data) => {
  const formattedData = data.map((item) => ({
    name: item.name,
    href: `/${item.url_path}`,
    excludeOnMobile: item.exclude_on_mobile === 1,
    subMenu: formatSubMenu(item.children_data),
    imageColumns: [
      [
        {
          imgSrc: item.dropdown_image_url1,
          imgTitle: item.dropdown_image_title1,
        },
        {
          imgSrc: item.dropdown_image_url2,
          imgTitle: item.dropdown_image_title2,
        },
      ],
      [
        {
          imgSrc: item.dropdown_image_url3,
          imgTitle: item.dropdown_image_title3,
        },
        {
          imgSrc: item.dropdown_image_url4,
          imgTitle: item.dropdown_image_title4,
        },
      ],
    ],
  }));

  return formattedData;
};

export default formatMenuData;
