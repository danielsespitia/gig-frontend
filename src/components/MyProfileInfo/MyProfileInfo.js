import styled from "styled-components";

import HeaderRight from "../Headers/HeaderRight";

import {
  ActionButtonContainer,
  ActionButton,
} from "../../pages/StyledPages/StyledPages";

import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
  ButtonContainer,
} from "../StyledComponents/StyledCard";

const MyProfileInfoContainer = styled(ComponentContainer)``;

const DataItem = styled.div`
  grid-row-gap: 5px;
`;

export const EditThumbnail = styled.img`
  justify-self: center;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
`;

function MyProfileInfo({
  name,
  profilePicture,
  video,
  youtubeId,
  startTime,
  endTime,
  email,
  description,
  city,
  mainInstrument,
  sideInstrument,
  youtubeAccount,
  twitterUsername,
  facebookAccount,
  instagramAccount,
  mainGenre,
  sideGenre,
  influences,
  isProfessional,
  bands,
  lookingFor,
  isProducer,
}) {
  return (
    <MyProfileInfoContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <iframe
                title="userVideo"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <VideoPlaceholder
                src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
                alt="videoPlaceholder"
              />
            )}
          </VideoContainer>
          <InfoContainer>
            <EditThumbnail src={profilePicture} alt="Profile Thumbnail" />
            <DataItem>
              <p>{name}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Correo Electrónico:</strong>
              </p>
              <p>{email}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Dirección:</strong>
              </p>
              <p>{description}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Número de Teléfono:</strong>
              </p>
              <p>{city}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Hora de Apertura:</strong>
              </p>
              <p>{mainInstrument}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Hora de Cierre:</strong>
              </p>
              <p>{sideInstrument}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>NIT: </strong>
              </p>
              <p>{youtubeAccount}</p>
            </DataItem>
            <DataItem>
              <p>
                <strong>Pago Mínimo:</strong>
              </p>
              <p>${twitterUsername}</p>
            </DataItem>
          </InfoContainer>
        </ProfileContainer>
        <ButtonContainer>
          <a href="/app/profile/edit">
            <ActionButtonContainer>
              <ActionButton>Editar Perfil</ActionButton>
            </ActionButtonContainer>
          </a>
        </ButtonContainer>
      </BodyContainer>
    </MyProfileInfoContainer>
  );
}

export default MyProfileInfo;
