import cx from "classnames";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/commons";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className={cx(
        "w-screen h-screen flex flex-col justify-center items-center bg-dark-01",
      )}
    >
      <div className={cx("text-center mb-12")}>
        <p className={cx("font-bold text-6xl text-white mb-4")}>
          Page Not Found
        </p>
        <p className={cx("font-medium text-custom-gray-03")}>
          Oops..., the page you're looking for doesn't exist.
        </p>
      </div>

      <div>
        <Button
          id="back-button"
          size="small"
          variant="primary"
          onClick={() => navigate("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default Error;
