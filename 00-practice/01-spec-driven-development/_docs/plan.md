# Retrospective MVP Spec

## Goal
Build a simple team retrospective tool where members submit private feedback during the week and review it together during a retrospective.

## Core Flow
1. Project owner creates a project/team.
2. Owner shares one reusable invite link.
3. Team members join with a display name.
4. Members submit feedback under:
   - Start
   - Stop
   - Continue
5. Each submission can be anonymous or named.
6. Before the retrospective, members can only see their own submissions.
7. Members can edit or delete their own submissions until the retrospective starts.
8. Project owner starts the retrospective.
9. All feedback is revealed. Anonymous feedback stays anonymous.
10. Project owner manually groups feedback cards into topics using drag-and-drop.
11. Each team member gets 3 votes and votes on topics.
12. Discuss topics from highest votes to lowest.
13. Project owner creates action items from topics or feedback.
14. Project owner ends the retrospective.
15. The retrospective remains available in project history.

## Roles

### Project Owner
- Create project/team.
- Share invite link.
- Add/remove team members.
- Start/end retrospective.
- Group feedback into topics.
- Create action items.

### Team Member
- Join using invite link and display name.
- Submit Start / Stop / Continue feedback.
- Choose anonymous or named submission.
- See only own feedback before retrospective.
- Use 3 votes during retrospective.
- View retrospective results after it ends.

## Action Item
Keep only:
- Title
- Owner
- Due date

## MVP Rules
- One active retrospective per project.
- Fixed project/team members only can submit and vote.
- One reusable invite link per project.
- No account/password authentication.
- No AI clustering.
- No comments/chat.
- No email/Slack notifications.
- Vote on topics, not individual cards.
- Hide vote counts until voting is finished.
- Anonymous feedback never reveals the author.

## Main Data Objects
- Project
- Member
- Retrospective
- Feedback
- Topic
- Vote
- Action Item

## Out of Scope
Do not add these in the MVP:
- AI features
- SSO/login system
- External integrations
- Notifications
- Chat/comments
- Advanced permissions
- Analytics/reporting
