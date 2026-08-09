export default function FormField({
  label,
  helperText,
  error,
  id,
  ...inputProps
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label}
      </label>
      <input
        id={id}
        className={`tap-target w-full rounded border px-3.5 text-[15px] bg-white/[0.03] text-ink placeholder:text-ink-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          error ? "border-caution" : "border-white/10"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-caution mt-1.5">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-ink-faint mt-1.5">{helperText}</p>
      ) : null}
    </div>
  );
}
