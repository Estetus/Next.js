
import { type DetailedHTMLProps } from 'react';
import {type TextareaHTMLAttributes } from 'react';
import { type  FieldError } from 'react-hook-form';


export interface TextAreaProps extends DetailedHTMLProps <TextareaHTMLAttributes<HTMLTextAreaElement>,HTMLTextAreaElement>{
  error?: FieldError
}