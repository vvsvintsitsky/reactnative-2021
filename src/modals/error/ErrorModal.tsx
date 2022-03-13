import React from 'react';

import {Modal} from '../../components/modal/Modal';

import ErrorIcon from '../../../assets/icons/Error.svg';

export function ErrorModal({
  children,
  headerText,
  contentText,
}: React.PropsWithChildren<{
  contentText?: React.ReactNode;
  headerText: string;
}>) {
  return (
    <Modal
      headerText={headerText}
      contentText={contentText}
      icon={<ErrorIcon fill="#DD6B55" />}>
      {children}
    </Modal>
  );
}
