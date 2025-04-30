#SoftsquareAgentblazers
    This repository contains the codebase developed for the Salesforce TDX Hackathon.

Credentials
    Admin Credentials
        Username: epic.572dd1474720@orgfarm.com
        Password: orgfarm1234

Community Site
    URL: https://orgfarm-f58ecb683b.my.site.com/customer/s/
    Username: johnj@tdxdemo.com.insurer
    Password: 13Project


Functional Process:

1. Let’s show it in action. We start with a WeCare4U policyholder logging into the Community portal to access Insure Buddy, our conversational AI assistant.
2. From here, users can ask questions about their existing or prospective policy—whether it's about what's covered, nearby hospitals in their network, or how to 3. begin a claim.
4. Let’s say John wants to initiate a claim. He tells Insure Buddy about his recent treatment. Based on that, a draft claim is created, and he’s redirected to a 5. personalized upload page.
6. As he uploads the required documents, they’re immediately passed on to Claim Ease—which uses a multi-modal large language model powered by Prompt Builder to  7. extract structured information from the attachments.
8. Using RAG capabilities from AgentForce’s Data Library, the system cross-checks what’s been submitted against what’s actually required for that
9. treatment—flagging any mismatches or missing files automatically.
10. Once the documents are verified, Insure Buddy is re-engaged—this time behind the scenes—to compare the extracted data with the actual policy terms.
11. That verification step updates the claim with a concise, AI-generated summary—giving both the insurer and the user full transparency.
12. At this point, all claim details—uploaded documents, extracted values, and the policy summary—are accessible in one clean view.
13. Behind the scenes, Prompt Builder plays a critical role, even extracting data from scanned or image-based bills to ensure nothing is missed.
14. We close the loop with agent-to-agent collaboration: Claim Ease calls Insure Buddy through Salesforce Flow to cross-check specific policy inclusions or
exclusions using both the uploaded documents and linked policy metadata.
15. that’s how our intelligent assistant ecosystem—powered by Insure Buddy and Claim Ease—streamlines insurance claims from query to decision.

Test Scenario
    Verify the functional processes using the test documents available in the Test Document folder of the repository.

Presentation Deck
    Link: 