import { useEffect, useRef } from "react";

function Tabs({ children }) {
  //select tabItems
  const tabItemsRef = useRef(null);

  //change tab item on click
  const handleChangTab = (event, index) => {
    const tabLinks = [...event.currentTarget.parentElement.children]; // refers to current targets parent elements children
    const items = [...tabItemsRef.current.children];
    const activeItem = items.find((item) => !item.classList.contains("hidden")); 
    const activeTabLink = tabLinks.find((item) =>
      item.classList.contains("active-tab") // it will check active-tab
    );
    if (activeItem === items[index]) return; //  if the same tab is selected then it will do nothing
    activeTabLink.classList.remove("active-tab"); // it not same tab it will remove 'active-tab' class
    event.currentTarget.classList.add("active-tab"); //in current tab it will add active-atb class
    activeItem.classList.add("hidden"); // in active tab it will add hidden  
    items[index].classList.remove("hidden"); // in clicked tab 
  };

  //show first tab-item
  useEffect(() => {
    let allItems = [...tabItemsRef.current.children];
    allItems[0].classList.remove("hidden");
  }, []);

  return (
    <div className="relative">
      <ul className="mb-0 flex list-none items-center space-x-4 pl-0">
        {children.map((item, index) => (
          <li
            key={index}
            className={` m-0 cursor-pointer rounded px-8 py-3 font-bold  text-dark dark:text-darkmode-light ${
              index === 0 && "active-tab"
            }`}
            onClick={(e) => handleChangTab(e, index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul 
        className="mt-1 mb-0 list-none rounded bg-theme-light p-6 dark:bg-darkmode-theme-dark"
        ref={tabItemsRef}
      >
        {children}
      </ul>
    </div>
  );
}

export default Tabs;
