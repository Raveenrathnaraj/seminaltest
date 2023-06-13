'use client';
import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

interface Task {
  id: number;
  title: string;
}

const CRUDOperation = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(0);
  const [editTaskTitle, setEditTaskTitle] = useState('');

  const createTask = () => {
    if (newTask !== '') {
      const newTaskItem = {
        id: Date.now(),
        title: newTask,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  const startEditTask = (taskId: number, taskTitle: string) => {
    setEditTaskId(taskId);
    setEditTaskTitle(taskTitle);
  };

  const saveEditTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: editTaskTitle,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(0);
    setEditTaskTitle('');
  };

  const cancelEditTask = () => {
    setEditTaskId(0);
    setEditTaskTitle('');
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const isAddButtonDisabled = newTask === '';

  const isEditButtonDisabled = (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId);
    return task ? task.title === editTaskTitle : true;
  };

  return (
    <div className='container mx-auto p-20'>
      <h3 className='text-2xl font-bold mb-4'>Task Manager</h3>

      <div className='flex mb-4 items-center'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='flex-grow mr-2 border border-gray-400 rounded px-2 py-1 text-black'
          placeholder='Enter task title'
        />
        <button
          onClick={createTask}
          className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center ${
            isAddButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isAddButtonDisabled}
        >
          <AddIcon />
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id} className='mb-2 flex items-center'>
            <span className='mr-2'>{index + 1}.</span>
            {editTaskId === task.id ? (
              <>
                <input
                  type='text'
                  value={editTaskTitle}
                  onChange={(e) => setEditTaskTitle(e.target.value)}
                  className='flex-grow border border-gray-400 rounded px-2 py-1 text-black'
                />
                <div className='ml-2 flex'>
                  <button
                    onClick={() => saveEditTask(task.id)}
                    className={`bg-green-500 text-white px-2 py-1 rounded ${
                      isEditButtonDisabled(task.id)
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    disabled={isEditButtonDisabled(task.id)}
                  >
                    <SaveIcon />
                  </button>
                  <button
                    onClick={cancelEditTask}
                    className='bg-red-500 text-white px-2 py-1 rounded ml-2'
                  >
                    <CancelIcon />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='flex-grow'>{task.title}</div>
                <div className='ml-2 flex'>
                  <button
                    onClick={() => startEditTask(task.id, task.title)}
                    className='bg-blue-500 text-white px-2 py-1 rounded'
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className='bg-red-500 text-white px-2 py-1 rounded ml-2'
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className='mt-20'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 1 hrs</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>Enter a task title in the input field.</li>
          <li>Click the Add Task button to add a new task to the list.</li>
          <li>
            To edit a task, click the Edit button next to the task and modify
            the task title in the input field that appears.
          </li>
          <li>
            Click the Save button to save the changes or the Cancel button to
            discard the changes.
          </li>
          <li>
            To delete a task, click the Delete button next to the task.The task
            will be permanently removed from the list.
          </li>
        </ol>
      </div>
      <br />
      <Link
        href={'https://codesandbox.io/s/exciting-gates-fl7m9f?file=/src/App.js'}
        target='_blank'
        className='underline text-blue-600 mt-12'
      >
        Sandbox Template
      </Link>
    </div>
  );
};

export default CRUDOperation;
