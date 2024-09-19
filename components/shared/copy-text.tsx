import OptBtn from '../card-page/opt-btn';

const CopyText = ({ ele }: { ele: any }) => {
  const copyWord = () => {
    const text = document.querySelector(ele)?.innerText;
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };
  return <OptBtn icon="copy" onClick={copyWord} />;
};

export default CopyText;
