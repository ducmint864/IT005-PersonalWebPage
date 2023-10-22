import { Modal } from '@web3uikit/core';

/**
 * @notice Tell the rest of the page other than the modal to stay blurry
 */

export default function ProjectModal({ children, _title, _okHandler, _cancelHandler }: {
  _title: string,
  _okHandler: any,
  _cancelHandler: any,
  children: React.ReactNode
}) {

  return (
      <Modal
        title={
          <h1 className="text-xl font-normal text-blue-600">{_title}</h1>
        }
        okText="View more"
        cancelText="Abort"
        onCloseButtonPressed={_cancelHandler}
        onCancel={_cancelHandler}
        onOk={_okHandler}
      >
        {children}
      </Modal>
  )
}