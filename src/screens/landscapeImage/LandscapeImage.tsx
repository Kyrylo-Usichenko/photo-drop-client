import React, { useCallback } from "react";
import {
  Button,
  Cross,
  CrossWrapper,
  Download,
  Footer,
  FooterButton,
  Img,
  LeftWrapper,
  Share,
  Word,
  Wrapper,
} from "./LandscapeImageStyles";
import FileSaver from "file-saver";

interface Props {
  image?: any;
  setIsOpen: (value: boolean) => void;
  imageId: string;
}

const LandscapeImage = ({ image, setIsOpen, imageId }: Props) => {
  const onButtonClick = () => {
    FileSaver.saveAs(image, imageId);
  };

  const handleShareButton = () => {
    // Check if n isavigator.share supported by the browser
    if (navigator.share) {
      navigator.share({
        url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`,
      });
    } else {
      copyToClipboard();
      alert("Photo link was copied to your clipboard");
    }
  };

  const copyMessage = () => {
    // const itemText = order?.items.reduce(
    //     (acc, item) => (acc += `${item.count} x ${item.item.unit !== 'Custom' ? item.item.unit : formatStr(item.item.custom_unit_name)} x ${formatStr(item.item.name)} \n`),
    //     str,
    // );
    // const userInfo = `${order?.order.business_name ? `${formatStr(order?.order.business_name)} • ` : ''}${formatStr(order!.order.delivery_address)}, ${formatStr(order!.order.city)} ${order?.order.post_code}\n${dashboard.if_there_are_any_issues.replace("{Seller's Name}", formatStr(order!.seller_full_name)).replace('{+62 88888 88888}', formatPhoneNumberIntl(`+${order?.seller_phone}`))}\n${dashboard.сonfirm_order}: ${window.location.href}`;
    return encodeURIComponent(image);
  };
  const copyToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(decodeURIComponent(copyMessage()));
    }
  };
  return (
    <Wrapper>
      <CrossWrapper>
        <Cross
          onClick={() => setIsOpen(false)}
          src="/assets/icons/cross.svg"
          alt=""
        />
      </CrossWrapper>

      <Img src={image} alt="" />
      {false ? (
        <Button>Unlock photo</Button>
      ) : (
        <Footer>
          <LeftWrapper>
            <Download onClick={onButtonClick}>
              <img
                width="24px"
                height="21px"
                src="/assets/icons/download.svg"
                alt=""
              />
              <Word>Download</Word>
            </Download>

            <Share onClick={handleShareButton}>
              <img
                width="24px"
                height="21px"
                src="/assets/icons/share.svg"
                alt=""
              />
              <Word>Share</Word>
            </Share>
          </LeftWrapper>
          <div>
            <FooterButton>See in a frame</FooterButton>
          </div>
        </Footer>
      )}
    </Wrapper>
  );
};

export default LandscapeImage;
