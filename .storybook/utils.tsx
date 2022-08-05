export function titleDecorator(title: string) {
  return (story: any) => (
    <>
      <h4 className="text-gray-4">{title}</h4>
      {story()}
    </>
  );
}

interface resizeDecoratorArgs {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  resize?: 'horizontal' | 'vertical' | 'both';
}

export function resizeDecorator({
  width = 'auto',
  height = 'auto',
  maxWidth = '100%',
  resize = 'both',
}: resizeDecoratorArgs = {}) {
  return (story: any) => (
    <div
      style={{
        width,
        height,
        maxWidth,
        resize,
        overflow: 'hidden',
      }}
    >
      {story()}
    </div>
  );
}
