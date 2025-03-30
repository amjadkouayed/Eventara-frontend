import React from "react";
import { useParams } from "react-router-dom";
import EmailInvitationPreview from "../../components/invitation-page/EmailInvitationPreview";

const InvitationPage = () => {
  const { event_id } = useParams();

  return (
    <div>
      <h1>Customize Your Invitation</h1>
      <EmailInvitationPreview eventId={event_id} />
    </div>
  );
};

export default InvitationPage;
