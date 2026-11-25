function LibraryButton({ buttonLabel, onClickButton, buttonType = 'button' }) {
  return (
    <div>
      <button type={buttonType} onClick={onClickButton}>
        {buttonLabel}
      </button>
    </div>
  )
}

export default LibraryButton