const ICChevronDown = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.625}
      d="m11.876 5.813-4.375 4.375-4.375-4.375"
    />
  </svg>
);

ICChevronDown.defaultProps = {
  color: "#8A92A6",
};
export default ICChevronDown;
