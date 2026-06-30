const ConfirmDialog = ({
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose,
  destructive = false,
}) => (
  <div className="fixed inset-0 bg-black/65 backdrop-blur-sm flex items-center justify-center z-[300] p-6"
    onClick={(e) => { e.stopPropagation(); onClose(); }}>
    <div className="bg-bg-card border border-border rounded-xl w-full max-w-md shadow-[0_32px_80px_rgba(0,0,0,0.6)] animate-modal-in"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-dialog-title">

      <div className="px-6 py-5 border-b border-border">
        <h2 id="confirm-dialog-title" className="text-[17px] font-semibold text-text-primary">
          {title}
        </h2>
      </div>

      <div className="px-6 py-5">
        <p className="text-[14px] text-text-muted leading-relaxed">{message}</p>
      </div>

      <div className="flex gap-3 px-6 py-5 border-t border-border">
        <button type="button" onClick={onClose}
          className="flex-1 py-2.5 bg-bg-input text-text-muted border border-border rounded-lg text-sm font-medium cursor-pointer hover:bg-bg-hover hover:text-text-primary transition-all font-sans">
          {cancelLabel}
        </button>
        <button type="button" onClick={onConfirm}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all font-sans border ${
            destructive
              ? 'bg-danger/10 text-danger border-danger/30 hover:bg-danger/20'
              : 'btn-gradient text-white border-none'
          }`}>
          {confirmLabel}
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
