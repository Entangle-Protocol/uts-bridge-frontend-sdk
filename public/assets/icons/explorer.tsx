import { memo } from 'react'

export interface ExplorerIconProps extends React.SVGProps<SVGSVGElement> {
  type?: 'hub' | 'udf' | 'bridge' | 'ets'
}

export const ExplorerIcon = memo(({ type = 'hub', ...props }: ExplorerIconProps) => {
  if (type === 'udf') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='114'
        height='33'
        fill='none'
        viewBox='0 0 114 33'
        {...props}
      >
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M-.001 7.274c0-3.348 2.554-6.061 5.705-6.061.91 0 2.032.413 3.05.875 1.069.484 2.212 1.112 3.229 1.697.354.203.78.203 1.133 0 1.016-.585 2.16-1.213 3.228-1.697 1.019-.462 2.14-.875 3.051-.875 3.15 0 5.705 2.713 5.705 6.06 0 3.348-2.554 6.062-5.705 6.062-.91 0-2.032-.414-3.051-.876-1.068-.484-2.212-1.111-3.228-1.696a1.128 1.128 0 0 0-1.133 0c-1.017.585-2.16 1.212-3.228 1.696-1.02.462-2.14.876-3.051.876-3.15 0-5.705-2.714-5.705-6.061Zm5.705-3.637c-1.89 0-3.423 1.628-3.423 3.637 0 2.008 1.532 3.637 3.423 3.637.398 0 1.137-.22 2.155-.682.97-.439 2.04-1.024 3.038-1.598a3.293 3.293 0 0 1 3.304 0c1 .574 2.07 1.159 3.038 1.598 1.018.462 1.757.682 2.156.682 1.89 0 3.423-1.629 3.423-3.637 0-2.009-1.533-3.637-3.423-3.637-.399 0-1.137.22-2.155.681-.97.44-2.04 1.025-3.039 1.6a3.293 3.293 0 0 1-3.304 0c-.999-.575-2.069-1.16-3.038-1.6-1.018-.461-1.757-.68-2.155-.68Z'
          clipRule='evenodd'
        />
        <path
          fill='#fff'
          d='M33.678 12.73V0h9.27v2.546h-6.622v2.546h5.297v2.364h-5.297v2.727h6.622v2.546h-9.27ZM45.153 12.73V3.454h2.472v1.273h.088c.153-.279.37-.533.653-.764.648-.52 1.372-.782 2.172-.782 1.118 0 1.984.334 2.596 1 .624.667.936 1.637.936 2.91v5.637h-2.472V7.456c0-.68-.165-1.194-.495-1.546-.318-.364-.77-.545-1.36-.545-.588 0-1.088.23-1.5.69-.412.461-.618 1.05-.618 1.764v4.91h-2.472ZM55.753 5.637V3.455h1.148v-2h2.472v2h2.543v2.182h-2.543v4.91h2.648v2.182h-5.12V5.637h-1.148ZM64.697 11.656c-.789-.909-1.183-2.097-1.183-3.564s.394-2.649 1.183-3.546c.8-.909 1.79-1.364 2.966-1.364.79 0 1.501.243 2.137.728.27.23.5.473.689.727h.088V3.455h2.472v9.274h-2.472v-1.182h-.088a4.38 4.38 0 0 1-.69.727 3.435 3.435 0 0 1-2.136.728c-1.177 0-2.165-.449-2.966-1.346Zm1.995-5.564c-.412.485-.618 1.152-.618 2 0 .849.206 1.516.618 2 .412.485.942.728 1.59.728.682 0 1.235-.237 1.66-.71.423-.484.635-1.157.635-2.018 0-.86-.212-1.527-.636-2-.424-.485-.977-.727-1.66-.727-.647 0-1.177.242-1.589.727ZM75.52 12.73V3.454h2.473v1.273h.088c.153-.279.37-.533.653-.764.648-.52 1.372-.782 2.172-.782 1.118 0 1.984.334 2.596 1 .624.667.936 1.637.936 2.91v5.637h-2.472V7.456c0-.68-.165-1.194-.495-1.546-.318-.364-.77-.545-1.36-.545-.588 0-1.088.23-1.5.69-.412.461-.618 1.05-.618 1.764v4.91H75.52ZM87.587 11.474c-.8-.897-1.2-2.054-1.2-3.473 0-1.418.4-2.576 1.2-3.473.8-.897 1.783-1.346 2.948-1.346.777 0 1.49.249 2.137.746.27.23.5.473.689.727h.088v-1.2h2.472v12.73h-8.21v-2.183h5.738v-2.655h-.088c-.2.291-.43.54-.689.746a3.435 3.435 0 0 1-2.136.727c-1.166 0-2.149-.449-2.95-1.346Zm1.995-5.4c-.424.473-.636 1.115-.636 1.927s.212 1.455.636 1.928c.424.473.977.709 1.66.709.647 0 1.177-.236 1.589-.71.412-.472.618-1.115.618-1.927s-.206-1.454-.618-1.927c-.412-.473-.942-.71-1.59-.71-.682 0-1.235.237-1.659.71ZM98.393 12.73V0h2.472v10.547h2.03v2.182h-4.502ZM105.444 11.584c-.93-.958-1.395-2.122-1.395-3.492s.465-2.527 1.395-3.473c.941-.958 2.095-1.437 3.46-1.437 1.389 0 2.531.473 3.426 1.419.894.945 1.342 2.11 1.342 3.491v.546h-7.063c.094.606.359 1.121.794 1.545.436.425.936.637 1.501.637.624 0 1.16-.182 1.607-.546a1.87 1.87 0 0 0 .424-.545h2.648a4.956 4.956 0 0 1-.882 1.636c-.942 1.091-2.208 1.637-3.797 1.637-1.365 0-2.519-.473-3.46-1.418Zm1.253-4.492h4.326a2.066 2.066 0 0 0-.724-1.218c-.376-.34-.841-.51-1.395-.51-.553 0-1.024.164-1.412.492-.389.327-.654.739-.795 1.236ZM33.564 27.266v-8.01h1.183v8.01c0 1.275.334 2.264 1.002 2.968.667.692 1.578 1.038 2.73 1.038 1.154 0 2.064-.346 2.732-1.038.667-.704 1.001-1.693 1.001-2.968v-8.01h1.184v8.01c0 1.542-.456 2.78-1.366 3.715-.898.922-2.081 1.383-3.55 1.383-1.469 0-2.658-.46-3.569-1.383-.898-.935-1.347-2.173-1.347-3.715ZM46.399 32V19.255h4.006c1.905 0 3.471.607 4.697 1.821 1.238 1.202 1.857 2.719 1.857 4.552 0 1.833-.619 3.356-1.857 4.57C53.876 31.399 52.31 32 50.405 32h-4.006Zm1.184-1.092h2.822c1.59 0 2.882-.492 3.878-1.475.995-.983 1.493-2.252 1.493-3.805 0-1.554-.498-2.822-1.493-3.805-.996-.984-2.288-1.475-3.878-1.475h-2.822v10.56ZM59.32 32V19.255h8.466v1.093h-7.283v5.007h5.827v1.092h-5.827V32h-1.183Z'
        />
      </svg>
    )
  }

  if (type === 'bridge') {
    return (
      <svg
        fill='none'
        width='114'
        height='36'
        viewBox='0 0 114 36'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.162598 7.27367C0.162598 3.92605 2.71669 1.21228 5.8673 1.21228C6.77769 1.21228 7.89928 1.62621 8.91829 2.08817C9.98616 2.57227 11.1299 3.20011 12.1465 3.78434C12.5002 3.98765 12.9256 3.98765 13.2794 3.78434C14.296 3.20011 15.4397 2.57227 16.5076 2.08817C17.5266 1.62621 18.6482 1.21228 19.5586 1.21228C22.7092 1.21228 25.2633 3.92605 25.2633 7.27367C25.2633 10.6213 22.7092 13.3351 19.5586 13.3351C18.6482 13.3351 17.5266 12.9211 16.5076 12.4592C15.4397 11.9751 14.296 11.3472 13.2794 10.763C12.9256 10.5597 12.5002 10.5597 12.1465 10.763C11.1299 11.3472 9.98616 11.9751 8.91829 12.4592C7.89928 12.9211 6.77769 13.3351 5.8673 13.3351C2.71669 13.3351 0.162598 10.6213 0.162598 7.27367ZM5.8673 3.63683C3.97693 3.63683 2.44448 5.2651 2.44448 7.27367C2.44448 9.28224 3.97693 10.9105 5.8673 10.9105C6.26605 10.9105 7.00483 10.6906 8.02281 10.2291C8.99193 9.78977 10.0618 9.20457 11.0609 8.6304C12.092 8.0378 13.3339 8.0378 14.365 8.6304C15.3641 9.20457 16.434 9.78977 17.4031 10.2291C18.4211 10.6906 19.1598 10.9105 19.5586 10.9105C21.449 10.9105 22.9814 9.28224 22.9814 7.27367C22.9814 5.2651 21.449 3.63683 19.5586 3.63683C19.1598 3.63683 18.4211 3.85674 17.4031 4.31823C16.434 4.75757 15.3641 5.34276 14.365 5.91693C13.3339 6.50953 12.092 6.50953 11.0609 5.91693C10.0618 5.34276 8.99193 4.75757 8.02281 4.31823C7.00483 3.85674 6.26605 3.63683 5.8673 3.63683Z'
          fill='white'
        />
        <path
          d='M33.8413 12.7289V0H43.1113V2.54578H36.4899V5.09157H41.787V7.45551H36.4899V10.1831H43.1113V12.7289H33.8413Z'
          fill='white'
        />
        <path
          d='M45.3163 12.7289V3.45499H47.7883V4.72788H47.8766C48.0296 4.44906 48.2474 4.19448 48.5299 3.96415C49.1773 3.44287 49.9013 3.18223 50.7017 3.18223C51.82 3.18223 52.6852 3.51561 53.2973 4.18236C53.9212 4.84911 54.2331 5.81893 54.2331 7.09183V12.7289H51.7611V7.45551C51.7611 6.77663 51.5963 6.26141 51.2668 5.90985C50.9489 5.54617 50.4957 5.36433 49.9072 5.36433C49.3186 5.36433 48.8183 5.59466 48.4063 6.05533C47.9943 6.51599 47.7883 7.10395 47.7883 7.81919V12.7289H45.3163Z'
          fill='white'
        />
        <path
          d='M55.9168 5.63709V3.45499H57.0645V1.45473H59.5364V3.45499H62.0791V5.63709H59.5364V10.5468H62.185V12.7289H57.0645V5.63709H55.9168Z'
          fill='white'
        />
        <path
          d='M64.8606 11.6561C64.0719 10.7468 63.6776 9.55881 63.6776 8.09195C63.6776 6.6251 64.0719 5.44313 64.8606 4.54604C65.6611 3.63683 66.6498 3.18223 67.827 3.18223C68.6157 3.18223 69.3278 3.42468 69.9635 3.9096C70.2342 4.13993 70.4638 4.38238 70.6521 4.63696H70.7404V3.45499H73.2124V12.7289H70.7404V11.5469H70.6521C70.4638 11.8015 70.2342 12.044 69.9635 12.2743C69.3278 12.7592 68.6157 13.0017 67.827 13.0017C66.6498 13.0017 65.6611 12.5531 64.8606 11.6561ZM66.8558 6.0917C66.4438 6.57661 66.2379 7.24336 66.2379 8.09195C66.2379 8.94055 66.4438 9.6073 66.8558 10.0922C67.2678 10.5771 67.7976 10.8196 68.445 10.8196C69.1277 10.8196 69.681 10.5832 70.1047 10.1104C70.5285 9.62548 70.7404 8.95267 70.7404 8.09195C70.7404 7.23124 70.5285 6.56448 70.1047 6.0917C69.681 5.60678 69.1277 5.36433 68.445 5.36433C67.7976 5.36433 67.2678 5.60678 66.8558 6.0917Z'
          fill='white'
        />
        <path
          d='M75.6844 12.7289V3.45499H78.1563V4.72788H78.2446C78.3977 4.44906 78.6154 4.19448 78.8979 3.96415C79.5454 3.44287 80.2693 3.18223 81.0698 3.18223C82.188 3.18223 83.0532 3.51561 83.6653 4.18236C84.2892 4.84911 84.6012 5.81893 84.6012 7.09183V12.7289H82.1292V7.45551C82.1292 6.77663 81.9644 6.26141 81.6348 5.90985C81.317 5.54617 80.8638 5.36433 80.2752 5.36433C79.6866 5.36433 79.1863 5.59466 78.7743 6.05533C78.3623 6.51599 78.1563 7.10395 78.1563 7.81919V12.7289H75.6844Z'
          fill='white'
        />
        <path
          d='M87.7503 11.4742C86.9499 10.5771 86.5496 9.4194 86.5496 8.00103C86.5496 6.58267 86.9499 5.42494 87.7503 4.52786C88.5508 3.63077 89.5337 3.18223 90.6991 3.18223C91.476 3.18223 92.1881 3.43075 92.8356 3.92778C93.1063 4.15811 93.3358 4.40057 93.5242 4.65515H93.6125V3.45499H96.0844V16.1839H87.8739V14.0018H93.6125V11.3469H93.5242C93.3241 11.6379 93.0945 11.8864 92.8356 12.0925C92.1999 12.5774 91.4877 12.8198 90.6991 12.8198C89.5337 12.8198 88.5508 12.3713 87.7503 11.4742ZM89.7456 6.07351C89.3218 6.5463 89.1099 7.18881 89.1099 8.00103C89.1099 8.81326 89.3218 9.45577 89.7456 9.92855C90.1693 10.4013 90.7226 10.6377 91.4053 10.6377C92.0528 10.6377 92.5825 10.4013 92.9945 9.92855C93.4065 9.45577 93.6125 8.81326 93.6125 8.00103C93.6125 7.18881 93.4065 6.5463 92.9945 6.07351C92.5825 5.60072 92.0528 5.36433 91.4053 5.36433C90.7226 5.36433 90.1693 5.60072 89.7456 6.07351Z'
          fill='white'
        />
        <path d='M98.5564 12.7289V0H101.028V10.5468H103.059V12.7289H98.5564Z' fill='white' />
        <path
          d='M105.607 11.5833C104.677 10.6256 104.212 9.46183 104.212 8.09195C104.212 6.72208 104.677 5.56435 105.607 4.61878C106.549 3.66108 107.702 3.18223 109.068 3.18223C110.457 3.18223 111.599 3.65502 112.493 4.60059C113.388 5.54617 113.835 6.70996 113.835 8.09195V8.63748H106.772C106.867 9.24362 107.132 9.75884 107.567 10.1831C108.003 10.6074 108.503 10.8196 109.068 10.8196C109.692 10.8196 110.227 10.6377 110.675 10.2741C110.851 10.1165 110.993 9.93462 111.098 9.72853H113.747C113.547 10.3468 113.253 10.8923 112.864 11.3651C111.922 12.4562 110.657 13.0017 109.068 13.0017C107.702 13.0017 106.549 12.5289 105.607 11.5833ZM106.861 7.09183H111.187C111.093 6.60691 110.851 6.2008 110.463 5.87349C110.086 5.53405 109.621 5.36433 109.068 5.36433C108.515 5.36433 108.044 5.52799 107.655 5.8553C107.267 6.18262 107.002 6.59479 106.861 7.09183Z'
          fill='white'
        />
        <path
          d='M33.8186 32V19.2552H39.7358C40.8161 19.2552 41.69 19.5768 42.3576 20.2201C43.0373 20.8513 43.3772 21.6524 43.3772 22.6234C43.3772 23.4974 43.0859 24.2135 42.5032 24.7719C42.2362 25.0146 41.951 25.2088 41.6475 25.3545V25.4455C42.0602 25.5669 42.4365 25.7611 42.7763 26.0281C43.541 26.6229 43.9234 27.4301 43.9234 28.4497C43.9234 29.4814 43.5471 30.331 42.7946 30.9986C42.042 31.6662 41.0224 32 39.7358 32H33.8186ZM35.002 24.8993H39.7358C40.5005 24.8993 41.1013 24.693 41.5383 24.2803C41.9752 23.8676 42.1937 23.3153 42.1937 22.6234C42.1937 21.9316 41.9752 21.3793 41.5383 20.9666C41.1013 20.5539 40.5005 20.3476 39.7358 20.3476H35.002V24.8993ZM35.002 30.9076H39.7358C40.719 30.9076 41.4655 30.6891 41.9752 30.2521C42.485 29.803 42.7399 29.2022 42.7399 28.4497C42.7399 27.6971 42.485 27.1023 41.9752 26.6654C41.4655 26.2163 40.719 25.9917 39.7358 25.9917H35.002V30.9076ZM46.2028 32V22.8966H47.2952V24.6262H47.3134C47.4712 24.2863 47.6836 23.9829 47.9507 23.7159C48.5576 23.109 49.3405 22.8055 50.2994 22.8055H51.3007V23.8069H50.2994C49.4254 23.8069 48.7032 24.1043 48.1327 24.699C47.5744 25.2817 47.2952 26.0463 47.2952 26.9931V32H46.2028ZM52.723 20.7481C52.5652 20.5903 52.4863 20.3961 52.4863 20.1655C52.4863 19.9349 52.5652 19.7407 52.723 19.5829C52.8808 19.4251 53.075 19.3462 53.3056 19.3462C53.5362 19.3462 53.7305 19.4251 53.8882 19.5829C54.046 19.7407 54.1249 19.9349 54.1249 20.1655C54.1249 20.3961 54.046 20.5903 53.8882 20.7481C53.7305 20.9059 53.5362 20.9848 53.3056 20.9848C53.075 20.9848 52.8808 20.9059 52.723 20.7481ZM52.7594 32V22.8966H53.8518V32H52.7594ZM57.2151 30.8348C56.3655 29.9244 55.9406 28.7956 55.9406 27.4483C55.9406 26.101 56.3655 24.9782 57.2151 24.08C58.0648 23.1697 59.0965 22.7145 60.3103 22.7145C61.1721 22.7145 61.9004 22.9269 62.4951 23.3517C63.0899 23.7644 63.5086 24.2196 63.7514 24.7172H63.7696V19.2552H64.862V32H63.7696V30.1793H63.7514C63.5086 30.677 63.0899 31.1382 62.4951 31.563C61.9004 31.9757 61.1721 32.1821 60.3103 32.1821C59.0965 32.1821 58.0648 31.733 57.2151 30.8348ZM58.0162 24.7901C57.3608 25.4941 57.0331 26.3801 57.0331 27.4483C57.0331 28.5164 57.3608 29.4086 58.0162 30.1247C58.6838 30.8287 59.4789 31.1807 60.4013 31.1807C61.2995 31.1807 62.0824 30.8287 62.75 30.1247C63.4297 29.4086 63.7696 28.5164 63.7696 27.4483C63.7696 26.3801 63.4297 25.4941 62.75 24.7901C62.0824 24.0739 61.2995 23.7159 60.4013 23.7159C59.4789 23.7159 58.6838 24.0739 58.0162 24.7901ZM68.2346 30.8348C67.3849 29.9244 66.9601 28.7956 66.9601 27.4483C66.9601 26.101 67.3849 24.9782 68.2346 24.08C69.0842 23.1697 70.1159 22.7145 71.3297 22.7145C72.1915 22.7145 72.9198 22.9269 73.5146 23.3517C74.1093 23.7644 74.5281 24.2196 74.7708 24.7172H74.7891V22.8966H75.8815V35.4593H68.1435V34.4579H74.7891V30.1793H74.7708C74.5281 30.677 74.1093 31.1382 73.5146 31.563C72.9198 31.9757 72.1915 32.1821 71.3297 32.1821C70.1159 32.1821 69.0842 31.733 68.2346 30.8348ZM69.0357 24.7901C68.3802 25.4941 68.0525 26.3801 68.0525 27.4483C68.0525 28.5164 68.3802 29.4086 69.0357 30.1247C69.7033 30.8287 70.4983 31.1807 71.4208 31.1807C72.319 31.1807 73.1019 30.8287 73.7695 30.1247C74.4492 29.4086 74.7891 28.5164 74.7891 27.4483C74.7891 26.3801 74.4492 25.4941 73.7695 24.7901C73.1019 24.0739 72.319 23.7159 71.4208 23.7159C70.4983 23.7159 69.7033 24.0739 69.0357 24.7901ZM79.2904 30.8348C78.4165 29.9366 77.9795 28.8077 77.9795 27.4483C77.9795 26.0888 78.4165 24.96 79.2904 24.0618C80.1644 23.1636 81.2446 22.7145 82.5312 22.7145C83.8057 22.7145 84.8799 23.1636 85.7539 24.0618C86.6399 24.9479 87.083 26.0463 87.083 27.3572V27.8124H79.0719C79.1205 28.7713 79.4725 29.5724 80.1279 30.2157C80.7834 30.859 81.5845 31.1807 82.5312 31.1807C83.5751 31.1807 84.4308 30.8469 85.0984 30.1793C85.414 29.888 85.6507 29.5542 85.8085 29.1779H86.9009C86.6824 29.7484 86.3729 30.2521 85.9724 30.6891C85.0741 31.6844 83.9271 32.1821 82.5312 32.1821C81.2446 32.1821 80.1644 31.733 79.2904 30.8348ZM79.0719 26.811H85.8995C85.8024 25.925 85.4383 25.1906 84.8071 24.608C84.1881 24.0132 83.4295 23.7159 82.5312 23.7159C81.633 23.7159 80.8684 24.0072 80.2372 24.5898C79.606 25.1724 79.2176 25.9128 79.0719 26.811Z'
          fill='white'
        />
      </svg>
    )
  }

  if (type === 'ets') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='112'
        height='33'
        viewBox='0 0 112 33'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 7.19101C0 3.88143 2.51651 1.1985 5.62076 1.1985C6.51775 1.1985 7.62283 1.60773 8.62685 2.06444C9.67901 2.54304 10.8059 3.16375 11.8075 3.74134C12.1561 3.94234 12.5752 3.94234 12.9238 3.74134C13.9254 3.16375 15.0523 2.54304 16.1045 2.06444C17.1085 1.60773 18.2136 1.1985 19.1106 1.1985C22.2148 1.1985 24.7313 3.88143 24.7313 7.19101C24.7313 10.5006 22.2148 13.1835 19.1106 13.1835C18.2136 13.1835 17.1085 12.7743 16.1045 12.3176C15.0523 11.839 13.9254 11.2183 12.9238 10.6407C12.5752 10.4397 12.1561 10.4397 11.8075 10.6407C10.8059 11.2183 9.67901 11.839 8.62685 12.3176C7.62283 12.7743 6.51775 13.1835 5.62076 13.1835C2.51651 13.1835 0 10.5006 0 7.19101ZM5.62076 3.59551C3.75821 3.59551 2.2483 5.20527 2.2483 7.19101C2.2483 9.17676 3.75821 10.7865 5.62076 10.7865C6.01364 10.7865 6.74155 10.5691 7.74455 10.1129C8.69941 9.67852 9.75354 9.09998 10.7379 8.53233C11.7539 7.94647 12.9775 7.94647 13.9934 8.53233C14.9778 9.09998 16.0319 9.67852 16.9868 10.1129C17.9898 10.5691 18.7177 10.7865 19.1106 10.7865C20.9731 10.7865 22.483 9.17676 22.483 7.19101C22.483 5.20527 20.9731 3.59551 19.1106 3.59551C18.7177 3.59551 17.9898 3.81291 16.9868 4.26916C16.0319 4.7035 14.9778 5.28205 13.9934 5.84969C12.9775 6.43556 11.7539 6.43556 10.7379 5.84969C9.75354 5.28205 8.69941 4.7035 7.74455 4.26916C6.74155 3.81291 6.01364 3.59551 5.62076 3.59551Z'
          fill='#F0EFF0'
        />
        <path
          d='M33.1831 12.5843V0H42.3167V2.51685H35.7927V5.03371H41.0119V7.37079H35.7927V10.0674H42.3167V12.5843H33.1831Z'
          fill='#F0EFF0'
        />
        <path
          d='M44.4893 12.5843V3.41573H46.9249V4.67416H47.0119C47.1627 4.3985 47.3772 4.14682 47.6556 3.9191C48.2935 3.40375 49.0068 3.14607 49.7954 3.14607C50.8973 3.14607 51.7497 3.47566 52.3528 4.13483C52.9675 4.79401 53.2749 5.75281 53.2749 7.01124V12.5843H50.8393V7.37079C50.8393 6.69963 50.6769 6.19026 50.3522 5.8427C50.039 5.48315 49.5925 5.30337 49.0126 5.30337C48.4327 5.30337 47.9397 5.53109 47.5338 5.98652C47.1279 6.44195 46.9249 7.02322 46.9249 7.73034V12.5843H44.4893Z'
          fill='#F0EFF0'
        />
        <path
          d='M54.9337 5.57303V3.41573H56.0646V1.4382H58.5002V3.41573H61.0054V5.57303H58.5002V10.427H61.1098V12.5843H56.0646V5.57303H54.9337Z'
          fill='#F0EFF0'
        />
        <path
          d='M63.746 11.5236C62.9689 10.6247 62.5804 9.45019 62.5804 8C62.5804 6.54981 62.9689 5.38127 63.746 4.49438C64.5346 3.59551 65.5089 3.14607 66.6687 3.14607C67.4458 3.14607 68.1475 3.38577 68.7738 3.86517C69.0405 4.09288 69.2667 4.33258 69.4523 4.58427H69.5392V3.41573H71.9749V12.5843H69.5392V11.4157H69.4523C69.2667 11.6674 69.0405 11.9071 68.7738 12.1348C68.1475 12.6142 67.4458 12.8539 66.6687 12.8539C65.5089 12.8539 64.5346 12.4105 63.746 11.5236ZM65.7119 6.02247C65.3059 6.50187 65.103 7.16105 65.103 8C65.103 8.83895 65.3059 9.49813 65.7119 9.97753C66.1178 10.4569 66.6397 10.6966 67.2776 10.6966C67.9503 10.6966 68.4954 10.4629 68.9129 9.99551C69.3305 9.5161 69.5392 8.85094 69.5392 8C69.5392 7.14906 69.3305 6.48989 68.9129 6.02247C68.4954 5.54307 67.9503 5.30337 67.2776 5.30337C66.6397 5.30337 66.1178 5.54307 65.7119 6.02247Z'
          fill='#F0EFF0'
        />
        <path
          d='M74.4105 12.5843V3.41573H76.8461V4.67416H76.9331C77.0838 4.3985 77.2984 4.14682 77.5768 3.9191C78.2146 3.40375 78.9279 3.14607 79.7166 3.14607C80.8184 3.14607 81.6709 3.47566 82.274 4.13483C82.8887 4.79401 83.1961 5.75281 83.1961 7.01124V12.5843H80.7604V7.37079C80.7604 6.69963 80.5981 6.19026 80.2733 5.8427C79.9602 5.48315 79.5136 5.30337 78.9337 5.30337C78.3538 5.30337 77.8609 5.53109 77.455 5.98652C77.049 6.44195 76.8461 7.02322 76.8461 7.73034V12.5843H74.4105Z'
          fill='#F0EFF0'
        />
        <path
          d='M86.2989 11.3438C85.5102 10.4569 85.1159 9.31236 85.1159 7.91011C85.1159 6.50786 85.5102 5.3633 86.2989 4.4764C87.0876 3.58951 88.056 3.14607 89.2042 3.14607C89.9697 3.14607 90.6714 3.39176 91.3093 3.88315C91.576 4.11086 91.8022 4.35056 91.9878 4.60225H92.0747V3.41573H94.5104V16H86.4206V13.8427H92.0747V11.218H91.9878C91.7906 11.5056 91.5644 11.7513 91.3093 11.9551C90.683 12.4345 89.9813 12.6742 89.2042 12.6742C88.056 12.6742 87.0876 12.2307 86.2989 11.3438ZM88.2648 6.00449C87.8472 6.47191 87.6385 7.10712 87.6385 7.91011C87.6385 8.71311 87.8472 9.34832 88.2648 9.81573C88.6823 10.2831 89.2274 10.5169 89.9001 10.5169C90.538 10.5169 91.0599 10.2831 91.4659 9.81573C91.8718 9.34832 92.0747 8.71311 92.0747 7.91011C92.0747 7.10712 91.8718 6.47191 91.4659 6.00449C91.0599 5.53708 90.538 5.30337 89.9001 5.30337C89.2274 5.30337 88.6823 5.53708 88.2648 6.00449Z'
          fill='#F0EFF0'
        />
        <path d='M96.946 12.5843V0H99.3816V10.427H101.382V12.5843H96.946Z' fill='#F0EFF0' />
        <path
          d='M103.893 11.4517C102.977 10.5049 102.519 9.35431 102.519 8C102.519 6.64569 102.977 5.50112 103.893 4.56629C104.821 3.61948 105.957 3.14607 107.303 3.14607C108.671 3.14607 109.796 3.61348 110.678 4.54831C111.559 5.48315 112 6.63371 112 8V8.53932H105.041C105.134 9.13858 105.395 9.64794 105.824 10.0674C106.253 10.4869 106.746 10.6966 107.303 10.6966C107.917 10.6966 108.445 10.5169 108.886 10.1573C109.06 10.0015 109.199 9.82172 109.303 9.61798H111.913C111.716 10.2292 111.426 10.7685 111.043 11.236C110.115 12.3146 108.868 12.8539 107.303 12.8539C105.957 12.8539 104.821 12.3865 103.893 11.4517ZM105.128 7.01124H109.39C109.298 6.53184 109.06 6.13034 108.677 5.80674C108.306 5.47116 107.848 5.30337 107.303 5.30337C106.758 5.30337 106.294 5.46517 105.911 5.78876C105.528 6.11236 105.267 6.51985 105.128 7.01124Z'
          fill='#F0EFF0'
        />
        <path
          d='M42.3345 28.0073V20.0967H43.4551V28.0571C43.4551 29.4129 42.9875 30.4339 42.0522 31.1201C41.117 31.8174 39.93 32.166 38.4912 32.166C37.0524 32.166 35.8654 31.8174 34.9302 31.1201C33.995 30.4339 33.5273 29.4129 33.5273 28.0571V20.0967H34.6479V28.0073C34.6479 29.0311 35.0132 29.8031 35.7437 30.3232C36.4686 30.8545 37.3872 31.1201 38.4995 31.1201C39.6118 31.1201 40.5277 30.8545 41.2471 30.3232C41.972 29.7975 42.3345 29.0256 42.3345 28.0073ZM49.5854 21.1177H45.1528V20.0967H55.1469V21.1177H50.7143V32H49.5854V21.1177ZM65.1454 28.771C65.1454 28.3117 64.9987 27.9326 64.7054 27.6338C64.4176 27.3294 64.0192 27.1081 63.5101 26.9697C63.1449 26.8701 62.5638 26.7511 61.7669 26.6128C60.9756 26.4744 60.436 26.3748 60.1483 26.314C59.5617 26.1867 59.0221 26.0207 58.5296 25.8159C58.0426 25.6112 57.6497 25.2847 57.3509 24.8364C57.0466 24.3937 56.8944 23.8403 56.8944 23.1763C56.8944 22.1691 57.3122 21.375 58.1478 20.7939C58.9889 20.2184 60.057 19.9307 61.3519 19.9307C62.68 19.9307 63.7564 20.2267 64.5809 20.8188C65.3999 21.4165 65.8094 22.2715 65.8094 23.3838V23.7241H64.6805V23.3838C64.6805 22.5703 64.3789 21.9616 63.7757 21.5576C63.1725 21.1536 62.3646 20.9517 61.3519 20.9517C60.3613 20.9517 59.5617 21.1453 58.953 21.5327C58.3332 21.9201 58.0233 22.4679 58.0233 23.1763C58.0233 23.6466 58.1672 24.0396 58.4549 24.355C58.7482 24.6704 59.1467 24.9028 59.6502 25.0522C60.0321 25.1629 60.6602 25.3013 61.5345 25.4673C62.4089 25.6333 62.9069 25.7301 63.0287 25.7578C63.6042 25.8796 64.1382 26.0456 64.6307 26.2559C65.1177 26.4606 65.5134 26.7733 65.8177 27.1938C66.1165 27.62 66.266 28.1457 66.266 28.771C66.266 29.8501 65.8094 30.6857 64.8963 31.2778C63.9777 31.87 62.8184 32.166 61.4183 32.166C60.0127 32.166 58.8589 31.8561 57.9569 31.2363C57.0493 30.6221 56.5955 29.7477 56.5955 28.6133V27.9409H57.7162V28.6133C57.7162 29.46 58.062 30.0964 58.7537 30.5225C59.4399 30.943 60.3309 31.1533 61.4266 31.1533C62.5168 31.1533 63.4077 30.9513 64.0995 30.5474C64.7967 30.1434 65.1454 29.5513 65.1454 28.771Z'
          fill='white'
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='114'
      height='33'
      viewBox='0 0 114 33'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M-0.000366211 7.27367C-0.000366211 3.92605 2.55373 1.21228 5.70434 1.21228C6.61472 1.21228 7.73631 1.62621 8.75533 2.08817C9.82319 2.57227 10.9669 3.20011 11.9835 3.78434C12.3373 3.98765 12.7627 3.98765 13.1164 3.78434C14.133 3.20011 15.2768 2.57227 16.3446 2.08817C17.3636 1.62621 18.4852 1.21228 19.3956 1.21228C22.5462 1.21228 25.1003 3.92605 25.1003 7.27367C25.1003 10.6213 22.5462 13.3351 19.3956 13.3351C18.4852 13.3351 17.3636 12.9211 16.3446 12.4592C15.2768 11.9751 14.133 11.3472 13.1164 10.763C12.7627 10.5597 12.3373 10.5597 11.9835 10.763C10.9669 11.3472 9.82319 11.9751 8.75533 12.4592C7.73631 12.9211 6.61472 13.3351 5.70434 13.3351C2.55373 13.3351 -0.000366211 10.6213 -0.000366211 7.27367ZM5.70434 3.63683C3.81397 3.63683 2.28151 5.2651 2.28151 7.27367C2.28151 9.28224 3.81397 10.9105 5.70434 10.9105C6.10309 10.9105 6.84186 10.6906 7.85984 10.2291C8.82897 9.78977 9.89884 9.20457 10.8979 8.63041C11.929 8.03781 13.1709 8.03781 14.2021 8.63041C15.2011 9.20457 16.271 9.78977 17.2401 10.2291C18.2581 10.6906 18.9969 10.9105 19.3956 10.9105C21.286 10.9105 22.8184 9.28224 22.8184 7.27367C22.8184 5.2651 21.286 3.63683 19.3956 3.63683C18.9969 3.63683 18.2581 3.85674 17.2401 4.31823C16.271 4.75757 15.2011 5.34276 14.2021 5.91693C13.1709 6.50953 11.929 6.50953 10.8979 5.91693C9.89884 5.34276 8.82897 4.75757 7.85984 4.31823C6.84186 3.85674 6.10309 3.63683 5.70434 3.63683Z'
        fill='white'
      />
      <path
        d='M33.6784 12.7289V0H42.9483V2.54578H36.3269V5.09157H41.624V7.45551H36.3269V10.1831H42.9483V12.7289H33.6784Z'
        fill='white'
      />
      <path
        d='M45.1534 12.7289V3.45499H47.6254V4.72788H47.7136C47.8667 4.44906 48.0844 4.19448 48.3669 3.96415C49.0144 3.44287 49.7383 3.18223 50.5388 3.18223C51.657 3.18223 52.5222 3.51561 53.1343 4.18236C53.7582 4.84911 54.0702 5.81893 54.0702 7.09183V12.7289H51.5982V7.45551C51.5982 6.77663 51.4334 6.26142 51.1038 5.90985C50.786 5.54617 50.3328 5.36433 49.7442 5.36433C49.1556 5.36433 48.6553 5.59466 48.2433 6.05533C47.8313 6.51599 47.6254 7.10395 47.6254 7.81919V12.7289H45.1534Z'
        fill='white'
      />
      <path
        d='M55.7538 5.63709V3.45499H56.9015V1.45473H59.3735V3.45499H61.9161V5.63709H59.3735V10.5468H62.022V12.7289H56.9015V5.63709H55.7538Z'
        fill='white'
      />
      <path
        d='M64.6976 11.6561C63.909 10.7468 63.5146 9.55881 63.5146 8.09196C63.5146 6.6251 63.909 5.44313 64.6976 4.54604C65.4981 3.63683 66.4869 3.18223 67.664 3.18223C68.4527 3.18223 69.1649 3.42469 69.8005 3.9096C70.0713 4.13993 70.3008 4.38238 70.4892 4.63696H70.5774V3.45499H73.0494V12.7289H70.5774V11.5469H70.4892C70.3008 11.8015 70.0713 12.044 69.8005 12.2743C69.1649 12.7592 68.4527 13.0017 67.664 13.0017C66.4869 13.0017 65.4981 12.5531 64.6976 11.6561ZM66.6929 6.0917C66.2809 6.57661 66.0749 7.24336 66.0749 8.09196C66.0749 8.94055 66.2809 9.6073 66.6929 10.0922C67.1049 10.5771 67.6346 10.8196 68.282 10.8196C68.9648 10.8196 69.518 10.5832 69.9418 10.1104C70.3655 9.62549 70.5774 8.95267 70.5774 8.09196C70.5774 7.23124 70.3655 6.56449 69.9418 6.0917C69.518 5.60679 68.9648 5.36433 68.282 5.36433C67.6346 5.36433 67.1049 5.60679 66.6929 6.0917Z'
        fill='white'
      />
      <path
        d='M75.5214 12.7289V3.45499H77.9934V4.72788H78.0817C78.2347 4.44906 78.4525 4.19448 78.735 3.96415C79.3824 3.44287 80.1063 3.18223 80.9068 3.18223C82.0251 3.18223 82.8903 3.51561 83.5024 4.18236C84.1263 4.84911 84.4382 5.81893 84.4382 7.09183V12.7289H81.9662V7.45551C81.9662 6.77663 81.8014 6.26142 81.4718 5.90985C81.154 5.54617 80.7008 5.36433 80.1122 5.36433C79.5237 5.36433 79.0234 5.59466 78.6114 6.05533C78.1994 6.51599 77.9934 7.10395 77.9934 7.81919V12.7289H75.5214Z'
        fill='white'
      />
      <path
        d='M87.5874 11.4742C86.7869 10.5771 86.3867 9.4194 86.3867 8.00103C86.3867 6.58267 86.7869 5.42494 87.5874 4.52786C88.3878 3.63077 89.3707 3.18223 90.5361 3.18223C91.313 3.18223 92.0252 3.43075 92.6726 3.92778C92.9433 4.15811 93.1729 4.40057 93.3612 4.65515H93.4495V3.45499H95.9215V16.1839H87.711V14.0018H93.4495V11.3469H93.3612C93.1611 11.6379 92.9316 11.8864 92.6726 12.0925C92.0369 12.5774 91.3248 12.8198 90.5361 12.8198C89.3707 12.8198 88.3878 12.3713 87.5874 11.4742ZM89.5826 6.07351C89.1589 6.5463 88.947 7.18881 88.947 8.00103C88.947 8.81326 89.1589 9.45577 89.5826 9.92856C90.0064 10.4013 90.5596 10.6377 91.2424 10.6377C91.8898 10.6377 92.4195 10.4013 92.8315 9.92856C93.2435 9.45577 93.4495 8.81326 93.4495 8.00103C93.4495 7.18881 93.2435 6.5463 92.8315 6.07351C92.4195 5.60072 91.8898 5.36433 91.2424 5.36433C90.5596 5.36433 90.0064 5.60072 89.5826 6.07351Z'
        fill='white'
      />
      <path d='M98.3935 12.7289V0H100.865V10.5468H102.896V12.7289H98.3935Z' fill='white' />
      <path
        d='M105.444 11.5833C104.514 10.6256 104.049 9.46183 104.049 8.09196C104.049 6.72208 104.514 5.56436 105.444 4.61878C106.386 3.66108 107.539 3.18223 108.905 3.18223C110.294 3.18223 111.436 3.65502 112.33 4.60059C113.225 5.54617 113.672 6.70996 113.672 8.09196V8.63748H106.61C106.704 9.24362 106.969 9.75884 107.404 10.1831C107.84 10.6074 108.34 10.8196 108.905 10.8196C109.529 10.8196 110.064 10.6377 110.512 10.2741C110.688 10.1165 110.83 9.93462 110.935 9.72853H113.584C113.384 10.3468 113.09 10.8923 112.701 11.3651C111.759 12.4562 110.494 13.0017 108.905 13.0017C107.539 13.0017 106.386 12.5289 105.444 11.5833ZM106.698 7.09183H111.024C110.93 6.60691 110.688 6.2008 110.3 5.87349C109.923 5.53405 109.458 5.36433 108.905 5.36433C108.352 5.36433 107.881 5.52799 107.492 5.8553C107.104 6.18262 106.839 6.59479 106.698 7.09183Z'
        fill='white'
      />
      <path
        d='M33.6556 32V19.2552H34.839V24.9903H42.2128V19.2552H43.3963V32H42.2128V26.0828H34.839V32H33.6556ZM46.3065 28.2676V22.8966H47.399V28.2676C47.399 29.2022 47.6235 29.9244 48.0726 30.4342C48.5338 30.9319 49.159 31.1807 49.9479 31.1807C50.8219 31.1807 51.5562 30.8712 52.151 30.2521C52.7457 29.6331 53.0431 28.8502 53.0431 27.9034V22.8966H54.1355V32H53.0431V30.4524H53.0249C52.7821 30.9137 52.3937 31.3203 51.8596 31.6723C51.3256 32.0121 50.6276 32.1821 49.7659 32.1821C48.7463 32.1821 47.9148 31.8301 47.2715 31.1261C46.6282 30.4221 46.3065 29.4692 46.3065 28.2676ZM56.8637 32V19.2552H57.9561V24.7172H57.9743C58.1685 24.2317 58.5751 23.7765 59.1942 23.3517C59.8132 22.9269 60.5536 22.7145 61.4154 22.7145C62.6292 22.7145 63.6609 23.1697 64.5106 24.08C65.3603 24.9782 65.7851 26.101 65.7851 27.4483C65.7851 28.7956 65.3603 29.9244 64.5106 30.8348C63.6609 31.733 62.6292 32.1821 61.4154 32.1821C60.5536 32.1821 59.8132 31.9697 59.1942 31.5448C58.5751 31.12 58.1685 30.6648 57.9743 30.1793H57.9561V32H56.8637ZM58.9575 24.7901C58.2899 25.4941 57.9561 26.3801 57.9561 27.4483C57.9561 28.5164 58.2899 29.4086 58.9575 30.1247C59.6372 30.8287 60.4262 31.1807 61.3244 31.1807C62.2469 31.1807 63.0358 30.8287 63.6913 30.1247C64.3589 29.4086 64.6927 28.5164 64.6927 27.4483C64.6927 26.3801 64.3589 25.4941 63.6913 24.7901C63.0358 24.0739 62.2469 23.7159 61.3244 23.7159C60.4262 23.7159 59.6372 24.0739 58.9575 24.7901Z'
        fill='white'
      />
    </svg>
  )
})

ExplorerIcon.displayName = 'ExplorerIcon'