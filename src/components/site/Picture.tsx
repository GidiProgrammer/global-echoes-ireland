import type { ImgHTMLAttributes } from "react";

type PictureProps = {
  avifSrcSet: string;
  webpSrcSet: string;
  jpegSrcSet: string;
  src: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
} & Pick<ImgHTMLAttributes<HTMLImageElement>, "decoding">;

export function Picture({
  avifSrcSet,
  webpSrcSet,
  jpegSrcSet,
  src,
  sizes,
  alt,
  width,
  height,
  className,
  priority = false,
  decoding = "async",
}: PictureProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={src}
        srcSet={jpegSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={className}
        decoding={decoding}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
      />
    </picture>
  );
}
