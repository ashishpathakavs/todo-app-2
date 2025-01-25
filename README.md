# To-Do List Application

A simple To-Do List app built with React JS where you can create, toggle, delete, and filter tasks. This app demonstrates basic React concepts such as state management, event handling, and conditional rendering.

## Features

- **Create Tasks**: Add new tasks to your list.
- **Toggle Tasks**: Mark tasks as completed or active.
- **Delete Tasks**: Remove tasks from the list.
- **Filter Tasks**: Filter tasks to show "All", "Active", or "Completed" tasks.
- **Task Count**: Displays the number of active tasks remaining.

## Learning from this Project

1. **Use of `flex-grow` and `flex` Properties**:
   - These CSS properties help manage the layout and distribute space within a container. By applying `flex-grow: 1` to the task text, it allows the text section to take up all available horizontal space, ensuring that the delete button stays aligned to the right. This ensures a clean and responsive layout.

2. **Use of `hover` for Delete Button Visibility**:
   - The delete button (`x`) is hidden by default using `display: none` and only becomes visible when the user hovers over the task row (`task-row:hover .delete-btn`). This improves the UI by keeping the task list clean and only showing the delete option when necessary.

3. **Use of `text-decoration: line-through` for Completed Tasks**:
   - To visually distinguish completed tasks, the task text is styled with `text-decoration: line-through` when the task is marked as completed. This helps users easily identify which tasks are done and which are pending.

4. **Use of `overflow: hidden` for Clean UI**:
   - The `.task-list` container uses `overflow: hidden` to prevent any content from spilling out of the container. This ensures that the task list doesn't overflow beyond the container boundaries and maintains a clean interface.

5. **Use of `word-wrap: break-word`**:
   - The `word-wrap: break-word` property is applied to the task text to ensure that long words or URLs break and wrap onto the next line, instead of overflowing outside the container. This ensures the app remains visually stable and readable even when tasks contain long text.


