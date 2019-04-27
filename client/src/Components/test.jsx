import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = (props) => {
  return (
    <MDBContainer className="border">

          <MDBCarousel
          activeItem={1}
          length={16}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >

          <MDBCarouselInner>
              {props.imgdata.map((image)=> {
                 (
                  <MDBCarouselItem itemId={(e) => props.selectImages(e.target.value)}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={'https://i.imgur.com/'+image.url}

                        alt="InkPlace"
                      />
                    <MDBMask overlay="black-slight" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">OldSchool</h3>
                      <p>Third text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
              )}
            )}

            </MDBCarouselInner>
            </MDBCarousel>
               </MDBContainer>
)
}
export default CarouselPage;
