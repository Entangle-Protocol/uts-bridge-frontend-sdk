import styles from './OperationCard.module.scss'
import { ArrowRight } from '@/public/assets/icons/arrow-right-tx'
import { Skeleton } from '@/ui/components/Skeleton'

export const OperationCardSkeletons = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className='flex w-full items-center justify-between'>
            <Skeleton width={80} height={16} radius={3} />
            <Skeleton width={90} height={16} radius={3} />
          </div>

          <div className='flex w-full items-center justify-between'>
            <Skeleton width={95} height={16} radius={3} />
            <div className='flex items-center gap-2 mr-2'>
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
              <ArrowRight className={styles.chains__arrow} />
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
            </div>
          </div>
          <div>
            <Skeleton width={316} height={40} radius={20} className='mt-2' />
          </div>
        </div>
      </div>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className='flex w-full items-center justify-between'>
            <Skeleton width={80} height={16} radius={3} />
            <Skeleton width={90} height={16} radius={3} />
          </div>

          <div className='flex w-full items-center justify-between'>
            <Skeleton width={95} height={16} radius={3} />
            <div className='flex items-center gap-2 mr-2'>
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
              <ArrowRight className={styles.chains__arrow} />
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
            </div>
          </div>
          <div>
            <Skeleton width={316} height={40} radius={20} className='mt-2' />
          </div>
        </div>
      </div>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className='flex w-full items-center justify-between'>
            <Skeleton width={80} height={16} radius={3} />
            <Skeleton width={90} height={16} radius={3} />
          </div>

          <div className='flex w-full items-center justify-between'>
            <Skeleton width={95} height={16} radius={3} />
            <div className='flex items-center gap-2 mr-2'>
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
              <ArrowRight className={styles.chains__arrow} />
              <div className='flex items-center gap-1'>
                <Skeleton width={16} height={16} radius={50} />
                <Skeleton width={26} height={14} radius={3} />
              </div>
            </div>
          </div>
          <div>
            <Skeleton width={316} height={40} radius={20} className='mt-2' />
          </div>
        </div>
      </div>
    </>
  )
}
