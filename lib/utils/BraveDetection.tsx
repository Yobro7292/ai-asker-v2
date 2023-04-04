"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";

export default function BraveDetection({ children }: PropsWithChildren) {
  const [isbrave, setIsBrave] = useState<boolean>(false);
  const Navigator: any = window.navigator;
  useEffect(() => {
    (async () => {
      if (Navigator.brave && (await Navigator.brave.isBrave())) {
        setIsBrave(true);
      } else setIsBrave(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {isbrave ? (
        <div className="flex justify-center items-center text-3xl text-white min-h-screen">
          Please don&apos;t use Brave browser
        </div>
      ) : (
        <>{children}</>
      )}
    </React.Fragment>
  );
}
