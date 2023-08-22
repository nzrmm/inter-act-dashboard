import cx from "classnames";

const Header = () => {
  return (
    <header
      className={cx("sticky top-0 bg-dark-01", " border-b border-b-[#4B5259]")}
    >
      <div className={cx("h-[60px] flex justify-end items-center px-11")}>
        Navbar
      </div>
    </header>
  );
};

export default Header;
