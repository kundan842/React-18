import Like from "./Like";
const LikeApp = () => {
  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
};

export default LikeApp;
