import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

export const Editor = ({
  code,
  scope,
}: {
  code: string;
  scope?: Record<string, unknown>;
}) => {
  return (
    <LiveProvider code={code} scope={scope} noInline={true} enableTypeScript>
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-3">
          <LiveEditor />
        </div>
        <div className="col-span-1 rounded">
          <LivePreview />
        </div>
      </div>
      <LiveError />
    </LiveProvider>
  );
};
