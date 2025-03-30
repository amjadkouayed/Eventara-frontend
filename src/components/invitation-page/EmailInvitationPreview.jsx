import React, { useState, useEffect } from "react";
import "./EmailInvitationPreview.css";

const EmailInvitationPreview = ({ eventId }) => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customization, setCustomization] = useState({
    title: "You're Invited!",
    instructions: "We look forward to seeing you at our event.",
    subject: "Event Invitation",
  });

  // Fetch event details
  useEffect(() => {
    const fetchEventDetails = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://localhost:4000/events/${eventId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleCustomizationChange = (field, value) => {
    setCustomization((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to generate the email preview
  const renderEmailPreview = () => {
    if (!eventData) return "Loading event details...";

    return `
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
                <table width="600px" cellspacing="0" cellpadding="0" style="background: #ffffff; margin: 20px; border-radius: 8px;">
                  
                  <tr>
                    <td align="center" style="padding: 20px; background: #007bff; border-radius: 8px 8px 0 0;">
                      <h2 style="color: #ffffff; margin: 0;">You're Invited!</h2>
                    </td>
                  </tr>
    
                  <tr>
                    <td align="center" style="padding: 20px;">
                      <h3 style="color: #333;">Hello Guest,</h3>
                      <p style="color: #666; font-size: 16px;">${
                        customization.title
                      }</p>
                    </td>
                  </tr>
    
                  <tr>
                    <td style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
                      <p><strong>Event:</strong> ${eventData.name}</p>
                      <p><strong>Date:</strong> ${eventData.date}</p>
                      <p><strong>Time:</strong> ${eventData.time}</p>
                      <p><strong>Location:</strong> ${eventData.location}</p>
                    </td>
                  </tr>
    
                  <tr>
                    <td align="center" style="padding: 20px;">
                      <p style="color: #444;">${customization.instructions}</p>
                    </td>
                  </tr>
    
                  <tr>
                    <td align="center" style="padding: 20px;">
                      <a href="#" style="background: #28a745; color: white; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-size: 16px;">Attending</a>
                      <a href="#" style="background: #dc3545; color: white; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-size: 16px; margin-left: 10px;">Not Attending</a>
                    </td>
                  </tr>
    
                  <tr>
                    <td align="center" style="padding: 15px; background: #eeeeee; border-radius: 0 0 8px 8px;">
                      <p style="font-size: 12px; color: #777;">Organized by ${
                        eventData.organizer || "Event Organizer"
                      }</p>
                    </td>
                  </tr>
    
                </table>
              </td>
            </tr>
          </table>
        `;
  };

  return (
    <div className="email-invitation-preview">
      <div className="invitation-card">
        <h2>Email Invitation Customization</h2>

        <div className="customization-section">
          <div className="form-group">
            <label>Email Subject</label>
            <input
              type="text"
              value={customization.subject}
              onChange={(e) =>
                handleCustomizationChange("subject", e.target.value)
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Custom Title</label>
            <input
              type="text"
              value={customization.title}
              onChange={(e) =>
                handleCustomizationChange("title", e.target.value)
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Custom Instructions</label>
            <textarea
              value={customization.instructions}
              onChange={(e) =>
                handleCustomizationChange("instructions", e.target.value)
              }
              rows={4}
              className="form-control"
            />
          </div>

          {/* Preview Area */}
          <div className="email-preview">
            <h3>Email Preview:</h3>
            <div dangerouslySetInnerHTML={{ __html: renderEmailPreview() }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInvitationPreview;
