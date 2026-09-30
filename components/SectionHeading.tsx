type Props = { title: string; text?: string };

export default function SectionHeading({ title, text }: Props) {
  return (
    <div className="mx-auto max-w-[800px] text-center">
      <h2 className="text-heading-m font-semibold leading-[1.2]">{title}</h2>
      {text && <p className="mt-4 text-body-s text-gray-500">{text}</p>}
    </div>
  );
}