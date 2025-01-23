# Collaborative Note Editor Challenge
Build a real-time collaborative note editor that allows multiple users to edit documents simultaneously.

### 1. Single-User Editor (Foundation)
Build a rich text editor with:
- Markdown support
- Auto-saving
- Basic formatting (bold, italic, lists)
- File structure (folders/organization)
Success criteria: User can create, edit, and organize notes with automatic saving

### 2. Search & Organization
Implement an efficient search system:
- Full-text search across notes
- Tag-based filtering
- Folder hierarchy
Success criteria: User can instantly find notes across a dataset of 1000+ documents

### 3. Multi-User Support
Add authentication and sharing:
- User accounts
- Note sharing
- Permission levels (read/write)
Success criteria: Multiple users can securely share and access notes

### 4. Real-Time Collaboration
Enable simultaneous editing:
- Live cursor positions
- Concurrent editing
- Conflict resolution
Success criteria: Multiple users can edit the same note simultaneously without conflicts

### 5. Offline Support
Implement offline functionality:
- Offline editing
- Background sync
- Conflict resolution
Success criteria: Users can edit offline with seamless sync when connection returns

## Technical Constraints
- Must use TypeScript
- Must implement proper error handling
- Must handle network latency gracefully
- Must be secure against XSS and CSRF
- Must scale to handle 100+ simultaneous users per document

## Focus Areas
1. State Management
   - Concurrent updates
   - Offline/online sync
   - Real-time data flow

2. Performance
   - Efficient updates
   - Search optimization
   - Load time < 2s

3. Data Consistency
   - Conflict resolution
   - Data validation
   - Error recovery
