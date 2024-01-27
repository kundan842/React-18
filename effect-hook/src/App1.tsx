import { useEffect, useState } from "react";
import { useRef } from "react";

function App1() {
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");
  const ref = useRef<HTMLInputElement>(null);
  //side effect called after rendering element
  // cam have more then one useEffect called one after another
  useEffect(() => {
    if (ref.current) ref.current.focus;
  });
  useEffect(() => {
    document.title = "Effect";
    connect();
    return () => disconnect();
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App1;
