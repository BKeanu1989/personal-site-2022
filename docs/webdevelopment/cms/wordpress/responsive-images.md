# Picture tag in Wordpress
```php
protected function findPictureForArtist($gallery_ids, $title, $permalink) {
        $img_id = $gallery_ids[0];

        $img_data = wp_get_attachment_metadata($img_id);
        if ($img_data === false) return;

        $file = $img_data['file']; // 2022/09/...
        $path_infos = pathinfo($file);
        $dir_name = $path_infos['dirname'];
        $alt_text = trim(strip_tags(get_post_meta($img_id, '_wp_attachment_image_alt', true)));
    
        $sources = $this->getSourcesForPicture($img_data, $dir_name);
        $figcaption = $this->getCaptionForPicture($title);
        $html = "<figure class='tw-group tw-inline-block tw-relative wrapper-for-image'><a href='{$permalink}'><picture>
            {$sources}
        <img src='{$this->upload_dir}/{$img_data['file']}' alt='{$alt_text}' width='{$img_data['width']}' height='{$img_data['height']}' /> 
        </picture>
        {$figcaption}</a></figure>";
        
        $this->images[] = $html;
        $this->html .= $html;
        return $html;
    }
    
    protected function getSourcesForPicture($img_data, $dir_name) {
        $html = "";
        if (isset($img_data['sizes'])) {
            if (isset($img_data['sizes']['mobile-gallery'])) {
                list('file' => $file, 'width' => $width) = $img_data['sizes']['mobile-gallery'];
                $html .= "
                <source media='(max-width: 1023px)' srcset='{$this->upload_dir}/{$dir_name}/{$file} {$width}w'>
                ";
            }
        }
        return $html;
    }

    protected function getCaptionForPicture($title) {
        return "<figcaption style='
        height: 50%; 
        position: absolute; 
        top: 50%; 
        left: 0; 
        width: 100%; 
        color: white; 
        background: rgb(0,111,124); 
        background: linear-gradient(0deg, rgba(0,111,124,1) 0%, rgba(255,255,255,0) 100%);
        opacity: 0;
        '
        class='group-hover:tw-animate-show-name group-active:tw-animate-show-name tw-duration-500 tw-transition-all'
        ><div style='display: flex; justify-content: center;align-items: center;height: 100%;' class='tw-text-xl'>" . $title . "</div></figcaption>";
    }
```
## Html Layout

## filter

### boilerplate

```php

function webp_picture_fix($content){
    global $post;
    preg_match_all("/<img(.*?)class=('|\")(.*?)('|\")(.*?)src=('|\")(.*?)('|\")(.*?)>/i", $content, $images);

    if(!is_null($images)){
        $i = -1;
        foreach ($images as $key) {
            $i++;
            //echo $key[$i];
            if(strpos($images[3][$i], 'size-full') !== false){
                //echo "hi";
                $slika_ekstenzija = $images[7][$i];
                $sewebp = preg_replace('/\\.[^.\\s]{3,4}$/', '', $slika_ekstenzija);
                $webp_slika_src = $sewebp.".webp";
                $replacement = '<picture><source srcset="'.$webp_slika_src.'" type="image/webp" /><img'.$images[1][$i].'class='.$images[2][$i].$images[3][$i].$images[4][$i].$images[5][$i].'src='.$images[6][$i].$images[7][$i].$images[8][$i].$images[9][$i].'></picture>';
                $content = str_replace($images[0][$i], $replacement, $content);
            }
        }
    }

    return $content;
}
add_filter('the_content', 'webp_picture_fix', 9999);
```

## Add image sizes
https://developer.wordpress.org/reference/functions/add_image_size/