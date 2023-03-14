import { lessonsData } from "@/data/lessons";
import {
  GET_MODULE,
  LESSON_CHANGE,
  LESSON_COMPLETED,
  LESSON_NEXT,
  NOTE_NEW,
  NOTE_REMOVE,
} from "./moduleActions";

export const moduleReducer = (state, action) => {
  switch (action.type) {
    case GET_MODULE: {
      let lessons = [...lessonsData];

      return {
        ...state,
        module: { lessons },
        isLoading: false,
        currentLesson: lessons[0],
      };
    }
    case LESSON_CHANGE: {
      let lesson = state.module.lessons.filter(
        (l) => l.id === action.payload.id
      )[0];
      return { ...state, currentLesson: lesson };
    }
    case LESSON_COMPLETED: {
      let dupLessons = [...state.module.lessons];
      dupLessons.filter((l) => l.id === action.payload.id)[0].completed = true;
      return {
        ...state,
        module: {
          ...state.module,
          lessons: dupLessons,
        },
      };
    }

    case LESSON_NEXT: {
      let dupLessons = [...state.module.lessons];
      let newCurrentLesson;
      let nextIdx;
      if (action.payload.id < dupLessons.length) {
        nextIdx =
          dupLessons.indexOf(
            dupLessons.filter((l) => l.id === action.payload.id)[0]
          ) + 1;
      } else {
        nextIdx = 0;
      }
      newCurrentLesson = dupLessons[nextIdx];
      return { ...state, currentLesson: newCurrentLesson };
    }
    case NOTE_NEW: {
      let { id, note } = action.payload;
      let dupLessons = [...state.module.lessons];
      let lesson = { ...dupLessons.filter((l) => l.id === id)[0] };

      let newNotes = [...lesson.notes];
      newNotes.push(note);
      lesson.notes = newNotes;
      for (let i = 0; i < dupLessons.length; i++) {
        if (dupLessons[i].id === id) {
          dupLessons[i] = lesson;
        }
      }

      return {
        ...state,
        currentLesson: lesson,
        module: {
          ...state.module,
          lessons: dupLessons,
        },
      };
    }
    case NOTE_REMOVE: {
      let { lessonId, noteId } = action.payload;
      let filteredNotes = state.module.lessons
        .filter((l) => l.id === lessonId)[0]
        .notes.filter((n) => n.id !== noteId);

      let dupLessons = [...state.module.lessons];
      let dupLesson = { ...dupLessons.filter((l) => l.id === lessonId)[0] };
      dupLesson.notes = filteredNotes;
      return {
        ...state,
        module: {
          ...state.module,
          lessons: dupLessons,
        },
      };
    }
    default:
      return state;
  }
};
