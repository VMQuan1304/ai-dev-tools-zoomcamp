# MVP Backlog

## 1. Initialize the project with a passing test
Goal: Establish an empty frontend and backend project that can run one passing test each.
Description: Scaffold a React, TypeScript, and Vite frontend plus a FastAPI backend without implementing product features. Add the minimum test configuration for Vitest and pytest, include one trivial passing test per application, and document the commands needed to run them.

## 2. Add local Docker Compose services
Goal: Run the frontend, API, PostgreSQL, and Redis together on a developer machine.
Description: Add Dockerfiles and a Docker Compose configuration for the planned local services. Provide environment-variable examples, persistent database storage, and concise instructions for starting and stopping the stack; do not configure external deployment.

## 3. Create the database foundation
Goal: Establish version-controlled PostgreSQL schema migrations for the MVP data model.
Description: Configure SQLAlchemy and Alembic in the FastAPI application. Add an initial migration for projects, members, retrospectives, feedback, topics, votes, and action items, including the relationships and constraints needed for one active retrospective per project.

## 4. Implement project creation and invite links
Goal: Let a project owner create a team and share a reusable join link.
Description: Add versioned API endpoints to create a project and retrieve its invite link. Use opaque, revocable session credentials for the owner and ensure the response exposes no secret credentials beyond the intended browser session.

## 5. Implement member joining and session access
Goal: Let a participant join a project with a display name and obtain a browser session.
Description: Add an API endpoint that accepts a valid reusable invite link and display name, creates a member, and returns an opaque session credential. Reject invalid or revoked links and prevent the API from treating a caller as a member without a valid session.

## 6. Implement feedback submission management
Goal: Let members create, edit, list, and delete their own Start, Stop, and Continue feedback.
Description: Add API endpoints and validation for feedback text, category, and anonymous-or-named status. Before a retrospective begins, ensure members can access only their own feedback and can modify only feedback they authored.

## 7. Implement retrospective state changes and feedback reveal
Goal: Let the project owner start and end the active retrospective safely.
Description: Add owner-only endpoints to start and end a project’s retrospective, enforcing the one-active-retrospective rule. Once started, return all feedback to project members while preserving anonymity for anonymous submissions; after ending, retain the results as project history.

## 8. Implement topic grouping for revealed feedback
Goal: Let the project owner organize revealed feedback cards into topics.
Description: Add API operations to create, rename, reorder, and remove topics, and to assign or unassign feedback cards. Restrict these operations to the owner during an active retrospective and preserve assignments for later viewing.

## 9. Implement topic voting with vote limits
Goal: Let each project member vote on topics up to a limit of three votes.
Description: Add transactional API operations for casting and removing topic votes, with database constraints that prevent duplicate votes and enforce the per-member limit under concurrent requests. Keep aggregate vote totals hidden until the defined voting phase is complete.

## 10. Build the owner’s retrospective board
Goal: Give the owner a browser interface for starting a retrospective and grouping feedback.
Description: Create the React views for the owner to start or end the retrospective and use `dnd-kit` to move revealed feedback into topics. Fetch and update data with TanStack Query, and show clear loading, authorization, and error states.

## 11. Build the member feedback and voting interface
Goal: Give members an interface for submitting feedback and voting during a retrospective.
Description: Create React views for joining via invite link, managing personal feedback before the retrospective, and voting on topics once it starts. Make anonymous status clear, enforce the three-vote limit in the interface, and avoid displaying hidden vote totals.

## 12. Add realtime board updates
Goal: Keep active retrospective participants synchronized without refreshing the page.
Description: Add authenticated FastAPI WebSocket events with Redis-backed cross-process delivery for retrospective state, topic, and voting changes. Update the frontend query cache from incoming events and ensure clients cannot subscribe to projects they do not belong to.

## 13. Add action-item creation and history views
Goal: Record and display actions from a completed retrospective.
Description: Add owner-only API and UI support to create action items from a topic or feedback card, with title, owner, and due date only. Add a project-history view that shows completed retrospectives, their feedback and topics, vote results, and action items.

## 14. Add end-to-end coverage for the core flow
Goal: Verify the MVP’s critical user journey in a running local stack.
Description: Use Playwright to cover project creation, member joining, feedback privacy, retrospective start, topic voting, and action-item creation. Include checks that anonymous authors and pre-reveal feedback remain hidden, and document how to run the suite with Docker Compose.
