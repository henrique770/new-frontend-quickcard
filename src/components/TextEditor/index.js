import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor({ onChange }) {
  const editorConfig = {
    removePlugins: [
      'Image',
      'ImageCaption',
      'ImageStyle',
      'ImageToolbar',
      'ImageUpload',
      'MediaEmbed',
    ],
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'Parágrafo',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2',
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3',
        },
      ],
    },
  };

  return (
    <CKEditor
      config={editorConfig}
      editor={ClassicEditor}
      onChange={onChange}
    />
  );
}

TextEditor.propTypes = {
  onChange: PropTypes.func,
};

export default TextEditor;
